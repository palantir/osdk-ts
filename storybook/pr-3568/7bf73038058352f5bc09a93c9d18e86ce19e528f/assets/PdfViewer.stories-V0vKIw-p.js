import{R as i,O as M,j as y,M as v}from"./iframe-DZ2S5Egj.js";import{P as D}from"./pdf-viewer-CJa3jKHH.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-b0GDh5A1.js";import"./preload-helper-BAPHHyAk.js";import"./PdfRenderer-4jqELPEs.js";import"./index-BICvOmJS.js";import"./PdfViewer-D6nCNXRq.js";import"./PdfViewer.module.css-BaPPUP3c.js";import"./PdfViewerAnnotationLayer-C8A3dDU4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CCN85Wj1.js";import"./PdfViewerOutlineSidebar-B7-TUqiN.js";import"./PdfViewerSidebarHeader-efIMdBHT.js";import"./useBaseUiId-RqVZ5Iof.js";import"./useControlled-sXBUF8Dy.js";import"./CompositeRoot-CPFOT2mc.js";import"./CompositeItem-lJPf-gaD.js";import"./ToolbarRootContext-Pr5QZpay.js";import"./composite-bGCnmzNS.js";import"./svgIconContainer-Py-qBXJ8.js";import"./PdfViewerSearchBar-BpcuOu25.js";import"./chevron-up-CGbdejM7.js";import"./chevron-down-BLP1CBjx.js";import"./cross-DiCLSwim.js";import"./PdfViewerSidebar-Aifw7-18.js";import"./index-DjhwwRUx.js";import"./index-2mFhqMpc.js";import"./index-7zEgThHK.js";import"./PdfViewerToolbar-7r497buz.js";import"./Button-DFRo9j0R.js";import"./chevron-right-heWTKYVL.js";import"./Input-NexZiXd0.js";import"./minus-D98D5OdX.js";import"./spin-Jb_KehpM.js";import"./error-BtA3iyKe.js";import"./withOsdkMetrics-d32PRZ1v.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const ye={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
