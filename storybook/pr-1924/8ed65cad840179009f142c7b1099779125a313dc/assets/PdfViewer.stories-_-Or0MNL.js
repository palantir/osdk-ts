import{R as i,O as M,j as y,M as v}from"./iframe-Bsjubv1K.js";import{P as D}from"./pdf-viewer-BeuYgk6X.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-yaoTa5zf.js";import"./preload-helper-CBSlvtqk.js";import"./PdfRenderer-Uklqvx3K.js";import"./index-CmudF92_.js";import"./PdfViewer-D9bSzGHl.js";import"./PdfViewer.module.css-DhlPqjjb.js";import"./PdfViewerAnnotationLayer-MCMslYKe.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BjGq821j.js";import"./PdfViewerOutlineSidebar-CLYa7rHi.js";import"./PdfViewerSidebarHeader-6pAj3QxT.js";import"./useBaseUiId-DLDYt0-k.js";import"./useControlled-DdoDj9m0.js";import"./CompositeRoot-BYy95ID4.js";import"./CompositeItem-XSSP3KvM.js";import"./ToolbarRootContext-DhANGvr5.js";import"./composite-DtZ9Vvdz.js";import"./svgIconContainer-C-XcVJ1-.js";import"./PdfViewerSearchBar-SRMWBrYz.js";import"./chevron-up-Do4ZXpYv.js";import"./chevron-down-DpkYLQzA.js";import"./cross-Bic_H-ZR.js";import"./PdfViewerSidebar-C_VS6i35.js";import"./index-maTKFo8k.js";import"./index-Bx0AStCC.js";import"./index-Bbjgty7W.js";import"./PdfViewerToolbar-C68pNJeN.js";import"./Button-CiqW3A50.js";import"./chevron-right-nnM7T420.js";import"./Input-pFro5s6B.js";import"./minus-RYmJ9p2X.js";import"./spin-Cedn2beH.js";import"./error-D6Q7N0S4.js";import"./withOsdkMetrics--AKB5z5x.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const ye={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
