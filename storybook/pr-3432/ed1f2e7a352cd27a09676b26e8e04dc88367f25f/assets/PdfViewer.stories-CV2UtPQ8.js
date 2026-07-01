import{R as i,O as M,j as y,M as v}from"./iframe-Cgn9HmW4.js";import{P as D}from"./pdf-viewer-LYK_KYjm.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-B-Cfj-ff.js";import"./preload-helper-uBDGuKYx.js";import"./PdfRenderer-CWXTLCZm.js";import"./index-DwK3Yx7j.js";import"./PdfViewer-vIZsZ9Fs.js";import"./PdfViewer.module.css-Ct3H40Wl.js";import"./PdfViewerAnnotationLayer-CNNgR3b-.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BBdnzBTO.js";import"./PdfViewerOutlineSidebar-C3dXkaxi.js";import"./PdfViewerSidebarHeader-CAfssp9Z.js";import"./useBaseUiId-WJ2yHsck.js";import"./useControlled-B6oHnu5C.js";import"./CompositeRoot-BSJDkti7.js";import"./CompositeItem-B9G2Zlnp.js";import"./ToolbarRootContext-MspK2pmB.js";import"./composite-bDxGJdE-.js";import"./svgIconContainer-BYyT4Gwo.js";import"./PdfViewerSearchBar-DT7RHacH.js";import"./chevron-up-CfnSBjHC.js";import"./chevron-down-Cf6034Xy.js";import"./cross-BGrnYC-u.js";import"./PdfViewerSidebar-k0lQN4l2.js";import"./index-BM1uFKXg.js";import"./index-BEI-SJts.js";import"./index-DHHs6hZF.js";import"./PdfViewerToolbar-BTxD9Xwh.js";import"./Button-DJZWbkxn.js";import"./chevron-right-CHMzZBUm.js";import"./Input-DUWIo-hu.js";import"./minus-C4uJBiq2.js";import"./spin-B1_ZxHcu.js";import"./error-DK8nTP8j.js";import"./withOsdkMetrics-Bd3oOI3v.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const ye={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
