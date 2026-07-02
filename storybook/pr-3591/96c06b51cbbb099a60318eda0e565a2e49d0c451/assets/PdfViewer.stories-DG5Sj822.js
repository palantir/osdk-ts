import{R as i,O as M,j as y,M as v}from"./iframe-C7ySVT8o.js";import{P as D}from"./pdf-viewer-jwEhYGM0.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-BjG2YExf.js";import"./preload-helper-BDkQBTym.js";import"./PdfRenderer-D38_7-Zz.js";import"./index-CPF4-L8A.js";import"./PdfViewer-93DOezvj.js";import"./PdfViewer.module.css-uSvVMp6H.js";import"./PdfViewerAnnotationLayer-CoPhKurN.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-bEL-1ux6.js";import"./PdfViewerOutlineSidebar-CkZpkFJq.js";import"./PdfViewerSidebarHeader-B7FTxaGs.js";import"./useBaseUiId-BQjkdaK-.js";import"./useControlled-DQYP7F2G.js";import"./CompositeRoot-HHbI2RA2.js";import"./CompositeItem-Pg_quQBf.js";import"./ToolbarRootContext-PcU21RR5.js";import"./composite-BdnZ_3c5.js";import"./svgIconContainer-oEr_wdi1.js";import"./PdfViewerSearchBar-8hAidkwH.js";import"./chevron-up-CjgMsugU.js";import"./chevron-down-C26vSaih.js";import"./cross-4Asy9XGe.js";import"./PdfViewerSidebar-BL9YKPwY.js";import"./index-_7DZxQKg.js";import"./index-uf0-eYVm.js";import"./index--LJ-8KIX.js";import"./PdfViewerToolbar-Dv4iGqre.js";import"./Button-C5PI83Nd.js";import"./chevron-right-C3K7NJQM.js";import"./Input-waYfT-p9.js";import"./minus-DV8GyOat.js";import"./search-D-8rX3NU.js";import"./spin-BN1qJJ1F.js";import"./error-LCGwqRYy.js";import"./withOsdkMetrics-BcN72Bo5.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
