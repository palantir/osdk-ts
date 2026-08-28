import{j as r,M as s}from"./iframe-VpGhx-PD.js";import{P as p}from"./pdf-viewer-C78wtrUx.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CJlgw7AD.js";import"./preload-helper-D0pvWWR7.js";import"./PdfViewer-DB0OVHpb.js";import"./index-LQdXBZRW.js";import"./BasePdfViewer-CNuJG0vc.js";import"./BasePdfViewer.module.css-DHydAy_u.js";import"./PdfViewerAnnotationLayer-BVejnFvb.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-cwdGDNVA.js";import"./PdfViewerOutlineSidebar-DgwGSY2e.js";import"./PdfViewerSidebarHeader-JJc7bFJE.js";import"./useBaseUiId-BlzsEQEx.js";import"./useControlled-DladVhMY.js";import"./CompositeRoot-BgBOTxkp.js";import"./CompositeItem-30_Ebn6h.js";import"./ToolbarRootContext-KZFvKfVC.js";import"./composite-BCiYB9bI.js";import"./svgIconContainer-Y-YHGSaq.js";import"./PdfViewerSearchBar-DjiFgLeP.js";import"./chevron-up-CdnvKolV.js";import"./chevron-down-Cq5P_lFy.js";import"./cross-MJ5oEJZb.js";import"./PdfViewerSidebar-DTm9UiSN.js";import"./index-DjF-cwug.js";import"./index-DjNDFA8y.js";import"./index-CrALdyEf.js";import"./PdfViewerToolbar-DiFV7GIi.js";import"./Button-CWji_dY_.js";import"./chevron-right-Cv_eTFoV.js";import"./Input-wrleGgmB.js";import"./search-CJ0NEjvE.js";import"./spin-B2Uz9LtW.js";import"./error-CQRU8cCe.js";import"./withOsdkMetrics-nBBrWVXt.js";import"./makeExternalStore-GDtn0QFv.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />`}}}};var t,m,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
