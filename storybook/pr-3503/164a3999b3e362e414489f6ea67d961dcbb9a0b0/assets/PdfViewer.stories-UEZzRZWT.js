import{R as i,O as M,j as y,M as v}from"./iframe-xm-duFe0.js";import{P as D}from"./pdf-viewer-BJaDs4y3.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-DFofs-Wb.js";import"./preload-helper-NFYB5vXP.js";import"./PdfRenderer-CN0946Sr.js";import"./index-WEiqDgp8.js";import"./PdfViewer-gKpNr-LO.js";import"./PdfViewer.module.css-CNunBSOv.js";import"./PdfViewerAnnotationLayer-DD_vmb51.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-0JDFwx_l.js";import"./PdfViewerOutlineSidebar-CMxSTlbc.js";import"./PdfViewerSidebarHeader-C6D5CEk6.js";import"./useBaseUiId-Coj7h1Ed.js";import"./useControlled-ChvEkrV8.js";import"./CompositeRoot-Bzr81Y5J.js";import"./CompositeItem-SOIJpvAO.js";import"./ToolbarRootContext-Ch9NH9nw.js";import"./composite-CnmhQz7L.js";import"./svgIconContainer-8_mKIt7h.js";import"./PdfViewerSearchBar-C8yVwV-G.js";import"./chevron-up-blGVXg6d.js";import"./chevron-down-BPEwPS--.js";import"./cross-YK87Ar5f.js";import"./PdfViewerSidebar-DDSrB1-A.js";import"./index-B2HpKLbv.js";import"./index-Zh0rcv83.js";import"./index-DAvbniGs.js";import"./PdfViewerToolbar-BLgLDuXd.js";import"./Button-D2nZ-be_.js";import"./chevron-right-C_YPCZd8.js";import"./Input-B63a4PRY.js";import"./minus-CSaYt0QR.js";import"./spin-C5Ux9mkP.js";import"./error-DoEWmbD3.js";import"./withOsdkMetrics-BP9Fn21E.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const ye={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
