import{R as i,O as M,j as y,M as v}from"./iframe-wJ1oJZqA.js";import{P as D}from"./pdf-viewer-jBPV4vST.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-BdovgaQH.js";import"./preload-helper-C30I8pJk.js";import"./PdfRenderer--1DMmD6-.js";import"./index-DB1qRfpe.js";import"./PdfViewer-CI3ggb4q.js";import"./PdfViewer.module.css-BwAqwDp0.js";import"./PdfViewerAnnotationLayer-CDBHCNPT.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DJTppF1g.js";import"./PdfViewerOutlineSidebar-Dvibuw3H.js";import"./PdfViewerSidebarHeader-C7GFru1N.js";import"./useBaseUiId-S-CMCZtV.js";import"./useControlled-VcYjGvBB.js";import"./CompositeRoot-BVXxssSB.js";import"./CompositeItem-vwgOgvIi.js";import"./ToolbarRootContext-vb405_LS.js";import"./composite-XwUNt90R.js";import"./svgIconContainer-DD4FpJIf.js";import"./PdfViewerSearchBar-D_RQlMEl.js";import"./chevron-up-cbIMPOmj.js";import"./chevron-down-CZUcXW02.js";import"./cross-e2e69Kyv.js";import"./PdfViewerSidebar-C91MP8IT.js";import"./index-cHdQdNDC.js";import"./index-C75sNCoG.js";import"./index-BROZzCM3.js";import"./PdfViewerToolbar-DSPvZgat.js";import"./Button-1A6yP1PQ.js";import"./chevron-right-BtAHkfIX.js";import"./Input-CIeOccrG.js";import"./minus-KkACW5qW.js";import"./search-DmdxLeyc.js";import"./spin-ZVdWraK8.js";import"./error-Dnt6Czwz.js";import"./withOsdkMetrics-dZNoEcyz.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
