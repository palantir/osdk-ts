import{R as i,O as M,j as y,M as v}from"./iframe-CBw4qc1x.js";import{P as D}from"./pdf-viewer-B1wn6irh.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-CPlWOrQV.js";import"./preload-helper-d5x3Ds14.js";import"./PdfRenderer-Cf4KYxq4.js";import"./index-Bz8kkEX0.js";import"./PdfViewer-BYvORwK3.js";import"./PdfViewer.module.css-9tSgujEJ.js";import"./constants-B8f3UZHi.js";import"./usePdfDocument-4aYIySY3.js";import"./index-CPhiTIc1.js";import"./index-BHfPxRwt.js";import"./PdfViewerAnnotationLayer-KIAw5z6B.js";import"./PdfViewerOutlineSidebar-Drc_5mXp.js";import"./PdfViewerSidebarHeader-BLOr6AJU.js";import"./useBaseUiId-D3QaTzsE.js";import"./useControlled-BGf7inOF.js";import"./CompositeRoot-mtbed2HR.js";import"./CompositeItem-C4Ck4nDs.js";import"./ToolbarRootContext-D46DES1S.js";import"./composite-CDYgkcJE.js";import"./svgIconContainer-ngEC2Yj2.js";import"./PdfViewerSearchBar-CNT0BbbU.js";import"./chevron-up-CTOkmwkz.js";import"./chevron-down-01Cqy853.js";import"./cross-4D2EbZPK.js";import"./PdfViewerSidebar-Dlw75pnj.js";import"./index-fZ7uT_3Q.js";import"./PdfViewerToolbar-8TRq6_uo.js";import"./Button-DyGJ7T34.js";import"./chevron-right-D59lcR_v.js";import"./Input-DSPlc0mp.js";import"./minus-DpqI8OUs.js";import"./spin-JDZMl5Kn.js";import"./error-BAo8pG2E.js";import"./withOsdkMetrics-CyzCduA6.js";import"./useRegisterUserAgent-BC_VAdJS.js";function L(...t){const{observableClient:s}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,m=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof m=="string"?m:m.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>s.observeObject(m,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,s,m,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Beta/DocumentViewer/Renderers/PdfViewer",component:D,parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:s}=L(K,v);return s||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
