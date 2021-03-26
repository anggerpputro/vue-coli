<template>
    <div>
        <!-- Content Header (Page header) -->
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">Daftar Akun</h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item active">Daftar Akun</li>
                    </ol>
                </div><!-- /.col -->
                </div><!-- /.row -->
            </div><!-- /.container-fluid -->
        </div>
        <!-- /.content-header -->

        <!-- Main content -->
        <div class="content">
            <div class="container-fluid">
                <div class="card card-outline card-primary">
                   <div class="card-header">
                        <h3 class="card-title">Data Akun</h3>

                        <div class="card-tools">
                            <!-- This will cause the card to maximize when clicked -->
                            <button type="button" class="btn btn-tool" data-card-widget="maximize"><i class="fas fa-expand"></i></button>
                            <!-- This will cause the card to collapse when clicked -->
                            <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i></button>
                            <!-- This will cause the card to be removed when clicked -->
                            <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fas fa-times"></i></button>
                        </div>
                        <!-- /.card-tools -->
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>NO</th>
                                        <th>USERNAME</th>
                                        <th>EMAIL</th>
                                        <th>NAMA</th>
                                        <th>HP</th>
                                        <th>ALAMAT</th>
                                        <th>JENIS</th>
                                        <th>...</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr v-for="(row, index) in paginationData.data" :key="index">
                                        <td>{{ index+1 }}</td>
                                        <td>{{ row.username }}</td>
                                        <td>{{ row.email }}</td>
                                        <td>{{ row.nama }}</td>
                                        <td>{{ row.nomorhp }}</td>
                                        <td>{{ row.alamat }}</td>
                                        <td>{{ row.jenis_kelamin }}</td>
                                        <td>
                                            <a href="#" @click.prevent="handleEdit(row, index)">Edit</a> | 
                                            <a href="#" @click.prevent="handleDelete(row, index)">Delete</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- /.card-body -->

                    <div v-if="loading" class="overlay">
                        <i class="fas fa-2x fa-sync-alt fa-spin"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getAllAkun, deleteAkun } from "@/api/akun";

export default {
    data() {
        return {
            loading: false,

            paginationData: {
                data: [],
            }
        };
    },
    created() {
        this.fetchData();
    },
    methods: {
        async fetchData() {
            this.loading = true;

            try {
                const resp = await getAllAkun();
                if(resp.data) {
                    this.paginationData = resp.data.data;
                }
            } catch(err) {
                console.error(err);
            }

            this.loading = false;
        },

        handleEdit(row, index) {
            alert("EDIT");
        },

        async handleDelete(row, index) {
            this.loading = true;

            try {
                const resp = await deleteAkun(row.id);
                console.log(resp);
                this.fetchData();
            } catch(err) {
                console.error(err);
            }

            this.loading = false;
        }
}
}
</script>