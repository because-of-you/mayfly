import{_ as i,c as a,e as n,o as e}from"./app-BT9-joFq.js";const l={};function h(t,s){return e(),a("div",null,s[0]||(s[0]=[n(`<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景"><span>背景</span></a></h2><p>本地电脑有两块磁盘，一个 ssd 一个机械硬盘。 目前 Linux 系统在机械硬盘，想要把 k8s 的宿主机挂载切换位置存储</p><h2 id="查看本机挂载情况" tabindex="-1"><a class="header-anchor" href="#查看本机挂载情况"><span>查看本机挂载情况</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">lsblk</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">NAME</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">   MAJ:MIN</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> RM</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">   SIZE</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> RO</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> TYPE</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> MOUNTPOINTS</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sda</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      8:0</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">    0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 931.5G</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> disk</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">                                 /</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sdb</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      8:16</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">   0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 447.1G</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> disk</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以观察到上述的磁盘 sda 为机械硬盘大小是 1T sdb 为 500GB 的 ssd</p><h2 id="格式化磁盘" tabindex="-1"><a class="header-anchor" href="#格式化磁盘"><span>格式化磁盘</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mkfs.ext4</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /dev/sda</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mke2fs</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1.47.0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (5-Feb-2023)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/dev/sdb</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> contains</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> a</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ext4</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> file</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> system</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">	last</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mounted</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> on</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Mon</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Sep</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 23</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 15:22:12</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2024</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Proceed</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> anyway?</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (y,N) y</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Discarding</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> device</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> blocks:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> done</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Creating</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> filesystem</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> with</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 117212886</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 4k</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> blocks</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> and</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 29310976</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> inodes</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Filesystem</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> UUID:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ffcb2f75-205e-49bd-8c67-17b0b9f64617</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Superblock</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> backups</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> stored</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> on</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> blocks:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">	32768,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 98304,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 163840,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 229376,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 294912,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 819200,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 884736,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 1605632,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 2654208,</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">	4096000,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 7962624,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 11239424,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 20480000,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 23887872,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 71663616,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 78675968,</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">	102400000</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Allocating</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> group</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tables:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> done</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Writing</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> inode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tables:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> done</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Creating</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> journal</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (262144 </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">blocks</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">): </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">done</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Writing</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> superblocks</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> and</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> filesystem</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> accounting</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> information:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> done</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建目录和挂载" tabindex="-1"><a class="header-anchor" href="#创建目录和挂载"><span>创建目录和挂载</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mkdir</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /var/lib/rancher/k3s/ssd-storage</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mount</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /dev/sdb</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /var/lib/rancher/k3s/ssd-storage/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改local-path-provisioner的存储位置" tabindex="-1"><a class="header-anchor" href="#修改local-path-provisioner的存储位置"><span>修改local-path-provisioner的存储位置</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">kubectl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -A</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">rg</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> local</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">kube-system</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">       local-path-config</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">                                      4</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      44d</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改 config.json</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;nodePathMap&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      &quot;node&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;DEFAULT_PATH_FOR_NON_LISTED_NODES&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      &quot;paths&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        &quot;/var/lib/rancher/k3s/ssd-storage&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      ]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  ]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档"><span>参考文档</span></a></h2><p><a href="https://github.com/rancher/local-path-provisioner/issues/232" target="_blank" rel="noopener noreferrer">格式化磁盘和挂载</a></p><p><a href="https://github.com/rancher/local-path-provisioner/issues/232" target="_blank" rel="noopener noreferrer">磁盘信息查看</a></p><p><a href="https://github.com/rancher/local-path-provisioner/issues/232" target="_blank" rel="noopener noreferrer">修改默认存储路径</a></p>`,17)]))}const p=i(l,[["render",h],["__file","20240923155423.html.vue"]]),r=JSON.parse('{"path":"/zhaosheng/bug/20240923155423.html","title":"k3s(k8s)更换本地挂载目录的操作","lang":"zh-CN","frontmatter":{"title":"k3s(k8s)更换本地挂载目录的操作","description":"背景 本地电脑有两块磁盘，一个 ssd 一个机械硬盘。 目前 Linux 系统在机械硬盘，想要把 k8s 的宿主机挂载切换位置存储 查看本机挂载情况 可以观察到上述的磁盘 sda 为机械硬盘大小是 1T sdb 为 500GB 的 ssd 格式化磁盘 创建目录和挂载 修改local-path-provisioner的存储位置 修改 config.jso...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/zhaosheng/bug/20240923155423.html"}],["meta",{"property":"og:site_name","content":"蜉蝣"}],["meta",{"property":"og:title","content":"k3s(k8s)更换本地挂载目录的操作"}],["meta",{"property":"og:description","content":"背景 本地电脑有两块磁盘，一个 ssd 一个机械硬盘。 目前 Linux 系统在机械硬盘，想要把 k8s 的宿主机挂载切换位置存储 查看本机挂载情况 可以观察到上述的磁盘 sda 为机械硬盘大小是 1T sdb 为 500GB 的 ssd 格式化磁盘 创建目录和挂载 修改local-path-provisioner的存储位置 修改 config.jso..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-23T08:06:54.000Z"}],["meta",{"property":"article:author","content":"wfy"}],["meta",{"property":"article:modified_time","content":"2024-09-23T08:06:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"k3s(k8s)更换本地挂载目录的操作\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-23T08:06:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"wfy\\",\\"url\\":\\"https://acitrus.cn\\"}]}"]]},"headers":[{"level":2,"title":"背景","slug":"背景","link":"#背景","children":[]},{"level":2,"title":"查看本机挂载情况","slug":"查看本机挂载情况","link":"#查看本机挂载情况","children":[]},{"level":2,"title":"格式化磁盘","slug":"格式化磁盘","link":"#格式化磁盘","children":[]},{"level":2,"title":"创建目录和挂载","slug":"创建目录和挂载","link":"#创建目录和挂载","children":[]},{"level":2,"title":"修改local-path-provisioner的存储位置","slug":"修改local-path-provisioner的存储位置","link":"#修改local-path-provisioner的存储位置","children":[]},{"level":2,"title":"参考文档","slug":"参考文档","link":"#参考文档","children":[]}],"git":{"createdTime":1727078814000,"updatedTime":1727078814000,"contributors":[{"name":"wfy-belief","email":"mail@acitrus.cn","commits":1}]},"readingTime":{"minutes":1.01,"words":304},"filePathRelative":"zhaosheng/bug/20240923155423.md","localizedDate":"2024年9月23日","autoDesc":true}');export{p as comp,r as data};