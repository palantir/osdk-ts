import{R as i,O as M,j as y,M as v}from"./iframe-ze6JErKo.js";import{P as D}from"./pdf-viewer-D45k0oVH.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-CgPxTind.js";import"./preload-helper-DS_iGLkb.js";import"./PdfRenderer-iB30B8sk.js";import"./index-B5u6Brpy.js";import"./PdfViewer-D2sBIWUs.js";import"./PdfViewer.module.css-ed-OfujY.js";import"./PdfViewerAnnotationLayer-WwXXtq_-.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BWBpC2sF.js";import"./PdfViewerOutlineSidebar-C_GsGp5V.js";import"./PdfViewerSidebarHeader-DxFLUtK3.js";import"./useBaseUiId-B5MU88id.js";import"./useControlled-D9slw4Au.js";import"./CompositeRoot-DVDzv71u.js";import"./CompositeItem-Bhm16n8y.js";import"./ToolbarRootContext-CBfSL9vs.js";import"./composite-BEE0FYVF.js";import"./svgIconContainer-DGCjPM9q.js";import"./PdfViewerSearchBar-oKDKJ1ir.js";import"./chevron-up-ivTF6qcc.js";import"./chevron-down-AMA2AExy.js";import"./cross-DI5j8eLi.js";import"./PdfViewerSidebar-Dpj2C8Jl.js";import"./index-gyv_Co2r.js";import"./index-DAQPWFr2.js";import"./index-DNJB-usE.js";import"./PdfViewerToolbar-DW2JCFbs.js";import"./Button-CJ3GEhv1.js";import"./chevron-right-DWFWicmd.js";import"./Input-Diw1Icia.js";import"./minus-YdC1t4ce.js";import"./search-DO35-Aev.js";import"./spin-DDakwrb7.js";import"./error-CQ5KiYGe.js";import"./withOsdkMetrics-C0_tSz5A.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
}`,...(k=(x=a.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};const be=["Default"];export{a as Default,be as __namedExportsOrder,fe as default};
