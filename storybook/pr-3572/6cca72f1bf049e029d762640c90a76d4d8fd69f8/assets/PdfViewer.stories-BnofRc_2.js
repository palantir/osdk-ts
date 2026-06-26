import{R as i,O as M,j as y,M as v}from"./iframe-D5-_jy09.js";import{P as D}from"./pdf-viewer-CKDs-EeO.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-DoIGosWd.js";import"./preload-helper-CgvIWr_I.js";import"./PdfRenderer-URnGGwVl.js";import"./index-CLREQx8T.js";import"./PdfViewer-DHsRrYRn.js";import"./PdfViewer.module.css-Ccwk_PmJ.js";import"./PdfViewerAnnotationLayer-D3m2wx-E.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BmF4cpfO.js";import"./PdfViewerOutlineSidebar-CTou9YB3.js";import"./PdfViewerSidebarHeader-GIxXpDQ3.js";import"./useBaseUiId-BGyHAtoE.js";import"./useControlled-C-I-tgrJ.js";import"./CompositeRoot-CJj0m-jv.js";import"./CompositeItem-CAERi6bY.js";import"./ToolbarRootContext-Bj02rPEG.js";import"./composite-Boyez49U.js";import"./svgIconContainer-CwIkbtev.js";import"./PdfViewerSearchBar-BZBmAhST.js";import"./chevron-up-BJN8xToV.js";import"./chevron-down-0uSgH4pO.js";import"./cross-B1lOTmXy.js";import"./PdfViewerSidebar-CM880KzP.js";import"./index-D3NB0frZ.js";import"./index-D3tS8aAn.js";import"./index-8XF68AT5.js";import"./PdfViewerToolbar-I3Srr9Ks.js";import"./Button-BnKHRSu3.js";import"./chevron-right-ByeLJ4aX.js";import"./Input-pnnIeEBQ.js";import"./minus-D7YTXURx.js";import"./spin-DTd_hCsF.js";import"./error-Df9xot2l.js";import"./withOsdkMetrics-BSLSWIkG.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const ye={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
