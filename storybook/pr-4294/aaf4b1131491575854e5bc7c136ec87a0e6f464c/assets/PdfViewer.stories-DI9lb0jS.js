import{j as r,M as s}from"./iframe-bA068ynB.js";import{P as p}from"./pdf-viewer-DzbJCmAP.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DigY_ZNX.js";import"./preload-helper-C9VsmxhQ.js";import"./PdfViewer-B442dz8f.js";import"./index-DBROM1hX.js";import"./BasePdfViewer-Cbzc-JKd.js";import"./BasePdfViewer.module.css-DQoTERHc.js";import"./PdfViewerAnnotationLayer-CFFgrHiC.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BgTYfGmU.js";import"./PdfViewerOutlineSidebar-CfLDzDEK.js";import"./PdfViewerSidebarHeader-CU6qES80.js";import"./useBaseUiId-BMBSefl3.js";import"./useControlled-Cpl65TMC.js";import"./CompositeRoot-D5PTxJI_.js";import"./CompositeItem-yupHDpkm.js";import"./ToolbarRootContext-CUI-NHrb.js";import"./composite-HNoPL5_Y.js";import"./svgIconContainer-ImDrBsfn.js";import"./PdfViewerSearchBar-DdALxMmd.js";import"./chevron-up-DRbH-VOT.js";import"./chevron-down-C3KFPXv7.js";import"./cross-Bkk1ngCc.js";import"./PdfViewerSidebar-DemO-ViF.js";import"./index-BpjGzWVl.js";import"./index-rNZjrxqa.js";import"./index-NJJaf9yA.js";import"./PdfViewerToolbar-BtYo3ieG.js";import"./Button-Dqcog7jP.js";import"./chevron-right-LZmlLkz3.js";import"./Input-Ca6oOOwx.js";import"./search-bHymEml7.js";import"./spin-DA1dBU9K.js";import"./error-BWkfH6c5.js";import"./withOsdkMetrics-CtZfcEFb.js";import"./makeExternalStore-VPZ76tFl.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
        code: \`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
