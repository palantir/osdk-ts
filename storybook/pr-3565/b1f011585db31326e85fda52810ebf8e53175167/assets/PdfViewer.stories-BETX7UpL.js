import{R as i,O as M,j as y,M as v}from"./iframe-Bv5r9rLr.js";import{P as D}from"./pdf-viewer-CSFgYmaJ.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-BK49hpUy.js";import"./preload-helper-DDCW8K5k.js";import"./PdfRenderer-D0MP1n16.js";import"./index-JNh3QgoF.js";import"./PdfViewer-U7WmJCob.js";import"./PdfViewer.module.css-C7nbn36u.js";import"./PdfViewerAnnotationLayer-CxNhc9nB.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DgcKxtLv.js";import"./PdfViewerOutlineSidebar-Cq7BEFo3.js";import"./PdfViewerSidebarHeader-CBrw6kQ2.js";import"./useBaseUiId-CJpolwEo.js";import"./useControlled-Bi6-J1Gs.js";import"./CompositeRoot-CMjnYJM7.js";import"./CompositeItem-B3gaU_YE.js";import"./ToolbarRootContext-Dx5TQc3l.js";import"./composite-o6L-Ahbi.js";import"./svgIconContainer-DHhUGoMR.js";import"./PdfViewerSearchBar-BtjM1j2b.js";import"./chevron-up-CjY9VMP2.js";import"./chevron-down-CObDGJK0.js";import"./cross-DMVhXqWl.js";import"./PdfViewerSidebar-Dp_5R5J8.js";import"./index-DdnH95hg.js";import"./index-DnraKvOI.js";import"./index-D_S_MII7.js";import"./PdfViewerToolbar-LNd6ZXdi.js";import"./Button-DHS_w5Yw.js";import"./chevron-right-D8tZS72k.js";import"./Input-D93OIh33.js";import"./minus-CLzzWU-0.js";import"./spin-DJ8sQqSY.js";import"./error-B4qmv8RY.js";import"./withOsdkMetrics-CHM8Yj4G.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const ye={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />`}}}};var S,x,k;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const {
      object: employee,
      isLoading
    } = useOsdkObject(Employee, MEDIA_EMPLOYEE_PK);
    if (isLoading || !employee?.employeeDocuments) {
      return <div style={{
        height: "600px"
      }}>Loading OSDK media…</div>;
    }
    return <div style={{
      height: "600px"
    }}>
        <PdfViewer media={employee.employeeDocuments} />
      </div>;
  },
  parameters: {
    docs: {
      source: {
        code: \`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(k=(x=a.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};const fe=["Default"];export{a as Default,fe as __namedExportsOrder,ye as default};
