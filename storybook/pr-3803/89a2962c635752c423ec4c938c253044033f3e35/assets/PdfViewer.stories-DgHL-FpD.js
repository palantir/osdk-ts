import{j as r,M as s}from"./iframe-q4S2v8GD.js";import{P as p}from"./pdf-viewer-B3W8AoTr.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CI7HsYhK.js";import"./preload-helper-Dpp2lQ4d.js";import"./PdfRenderer-BT_QHq61.js";import"./index-BRFgZsWh.js";import"./PdfViewer-Ci846jzk.js";import"./PdfViewer.module.css-B330neQn.js";import"./PdfViewerAnnotationLayer-BnurCBLp.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-IrNrMvxk.js";import"./PdfViewerOutlineSidebar-Cl0g1OMQ.js";import"./PdfViewerSidebarHeader-D-tPFx3R.js";import"./useBaseUiId-D3OPJG_I.js";import"./useControlled-D8LdPNhB.js";import"./CompositeRoot-DFv7kg88.js";import"./CompositeItem-D_tBcLdd.js";import"./ToolbarRootContext-DRR8g4NM.js";import"./composite-DOJ73mma.js";import"./svgIconContainer-DFZA-Fi_.js";import"./PdfViewerSearchBar-CuBS6az0.js";import"./chevron-up-BKbNONx0.js";import"./chevron-down-DRJe7j9S.js";import"./cross-CN4Kceog.js";import"./PdfViewerSidebar-BSFOHqHF.js";import"./index-BAqD6s8z.js";import"./index-BWxwkoVm.js";import"./index-B40hmhNC.js";import"./PdfViewerToolbar-BEbagA0X.js";import"./Button-Cxxa8caB.js";import"./chevron-right-CAzjXmeW.js";import"./Input-DwFaTt_h.js";import"./search-YAd7k3do.js";import"./spin-C4aPgUIJ.js";import"./error-BqxlTXt7.js";import"./withOsdkMetrics-DyNmWK8l.js";import"./makeExternalStore-B1AqrHO7.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
