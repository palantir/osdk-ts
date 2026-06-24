import{R as i,O as M,j as y,M as v}from"./iframe-CKsf8UzZ.js";import{P as D}from"./pdf-viewer-6b5qpD8v.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-Dvu38b--.js";import"./preload-helper-CgJHPNxH.js";import"./PdfRenderer-B2fzntQE.js";import"./index-Dn2ZZwsq.js";import"./PdfViewer-DwQfqKbe.js";import"./PdfViewer.module.css-BJCFjTBU.js";import"./PdfViewerAnnotationLayer-ChGBwBin.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CB71gp9j.js";import"./PdfViewerOutlineSidebar-DfmK8dwz.js";import"./PdfViewerSidebarHeader-BCCiakjE.js";import"./useBaseUiId-dSJZymtq.js";import"./useControlled-B0QG-6kn.js";import"./CompositeRoot-Cps3wD-I.js";import"./CompositeItem-D9PUIA7b.js";import"./ToolbarRootContext-CSd27HYM.js";import"./composite-CUumUHIC.js";import"./svgIconContainer-Ccw1bsj4.js";import"./PdfViewerSearchBar-DITQYl-L.js";import"./chevron-up-Bi6FdN4G.js";import"./chevron-down-CmxYovX-.js";import"./cross-Ds666Ua7.js";import"./PdfViewerSidebar-CbPeyTZ6.js";import"./index-BDIs0NMg.js";import"./index-DlUiPV7k.js";import"./index-DSXhREWg.js";import"./PdfViewerToolbar-OtMJ3JeD.js";import"./Button-C4wI3ixl.js";import"./chevron-right-B74U8xGb.js";import"./Input-BT6CPm0v.js";import"./minus-7Cyn_EOh.js";import"./spin-CmFFkob4.js";import"./error-UHLKJUDO.js";import"./withOsdkMetrics-CggXmOKU.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const ye={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
