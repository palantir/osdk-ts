import{R as i,O as M,j as y,M as v}from"./iframe-Bo5lRVN5.js";import{P as D}from"./pdf-viewer-DRPGcPxt.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-BAOp2Dwr.js";import"./preload-helper-DBkxsbrs.js";import"./PdfRenderer-CXZUW7Kg.js";import"./index-DMfP8pVa.js";import"./PdfViewer-BI2SsAXi.js";import"./PdfViewer.module.css-BKqaTwPc.js";import"./PdfViewerAnnotationLayer-CAdysMt8.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DMwYEryy.js";import"./PdfViewerOutlineSidebar-CIlHbBaz.js";import"./PdfViewerSidebarHeader-D6Dwx66D.js";import"./useBaseUiId-C3S6x9mV.js";import"./useControlled-D2Q6nlGH.js";import"./CompositeRoot-C5bvOrGm.js";import"./CompositeItem-Bp7RHjw2.js";import"./ToolbarRootContext-7kYaw8z4.js";import"./composite-QEhFIcfy.js";import"./svgIconContainer-pD3wZNFz.js";import"./PdfViewerSearchBar-BAIkMUao.js";import"./chevron-up-B9R7gVR6.js";import"./chevron-down-DzhEnJmA.js";import"./cross-CRTpuhUJ.js";import"./PdfViewerSidebar-K377d2pd.js";import"./index-BTDX2hEC.js";import"./index-BJJQE5E4.js";import"./index-BFlMYbFl.js";import"./PdfViewerToolbar-TwZU4L_8.js";import"./Button-D06YhiDm.js";import"./chevron-right-D0jrrG3B.js";import"./Input-DqFMiayj.js";import"./minus-BYokkUaO.js";import"./spin-CvN2q0L_.js";import"./error-Bk-h6nHQ.js";import"./withOsdkMetrics-B5ZVfLVM.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const ye={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
