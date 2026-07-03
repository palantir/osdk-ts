import{R as i,O as M,j as y,M as v}from"./iframe-B0bgem6h.js";import{P as D}from"./pdf-viewer-B2sGZ6D2.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-CIzGe6Gc.js";import"./preload-helper-o4rus8nx.js";import"./PdfRenderer-DlB_-uAk.js";import"./index-BzugOSE0.js";import"./PdfViewer-DAJiTpuS.js";import"./PdfViewer.module.css-DZEPwHWs.js";import"./PdfViewerAnnotationLayer-B2ynqWEV.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-1A4ul_pQ.js";import"./PdfViewerOutlineSidebar-v4z7-mAY.js";import"./PdfViewerSidebarHeader-CpL01Ru3.js";import"./useBaseUiId-BEX-u_qo.js";import"./useControlled-mJi4SfI4.js";import"./CompositeRoot-gxmGriyF.js";import"./CompositeItem-D6KfO6Fb.js";import"./ToolbarRootContext-Cw7F_jEZ.js";import"./composite-Bhfze_tK.js";import"./svgIconContainer-Bn2APD4U.js";import"./PdfViewerSearchBar-DzxGDxuI.js";import"./chevron-up-_0Gvo3vg.js";import"./chevron-down-BmdI0Fmy.js";import"./cross-DXK8iSTm.js";import"./PdfViewerSidebar-Dl1Vy37J.js";import"./index-DE414JAH.js";import"./index-D1vRvMhB.js";import"./index-DAy6qlyx.js";import"./PdfViewerToolbar-CbjWeWdS.js";import"./Button-BCH-GqBR.js";import"./chevron-right-DJpFLUGX.js";import"./Input-DnQOjmUp.js";import"./minus-CC09LIbZ.js";import"./search-BCSIQ8We.js";import"./spin-CW1EDdBn.js";import"./error-D2v1VlU-.js";import"./withOsdkMetrics-BH3Cbpon.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
