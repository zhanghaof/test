/*
 * @Author: 张昊范 haofan.zhang@magustek.com
 * @Date: 2023-12-08 14:22:24
 * @LastEditors: 张昊范 haofan.zhang@magustek.com
 * @LastEditTime: 2023-12-08 15:31:03
 * @FilePath: \learnNode\bfs.c
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
bool visited[MAX_VERTEX_NUM]//访问标记数组
void BFSTraverse(Graph G){  
  for(i=0;i<G.vexnum;++i){
    visited[i]=FALSE
  }
  initQuue();
  for(i=0;i<G.vexnum;++i){
    if(!visited[i]){
      BFS(G,i)
    }
  }
}
void BFS(Graph G,int v){
  visit(v)
  visited(v)=TRUE;
  Enqueue(Q,v)
  while(!isEmpty(Q)){
    DeQueue(Q,v)
    for(w=FirstNeighbor(G,v);w>=0;w=nextNeighbor(G,v,w)){
      if(!visited[w]){
        visit(w);
        visited[w]=TRUE;
        Enqueue(Q,w)
      }
    }
  }
}

void bubble_sort(int* n,int length) {
	for (int i = 0; i < length-1; i++){
		for (int j = 0; j<length - i-1; j++){
			if (n[j] > n[j + 1]) {
				int temp = n[j];
				n[j] = n[j + 1];
				n[j + 1] = temp;
			}
		}
	}
}

void select_sort(int* n, int length) {
	for (int i = 0; i < length-1; i++) {
		for (int j = i + 1; j < length; j++) {
			if (n[i] > n[j])
			{
				int temp = n[i];
				n[i] = n[j];
				n[j] = temp;
			}
		}
	}
}

for(i=0;i<array.length;i++){
  for(j=i+1;i<array.length-i-1;j++){
    if(array[j + 1] < array[j]){
      int temp = array[j + 1];           
      array[j + 1] = array[j];
      array[j] = temp;
    }
  }
}



