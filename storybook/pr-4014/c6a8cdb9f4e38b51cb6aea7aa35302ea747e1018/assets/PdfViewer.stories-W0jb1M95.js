import{j as r,M as s}from"./iframe-5SoalxB8.js";import{P as p}from"./pdf-viewer-KeKrmn7J.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-5M5b0vYc.js";import"./preload-helper-B3AWIfbd.js";import"./PdfViewer-CEHQwOwV.js";import"./index-Cez1kwXk.js";import"./BasePdfViewer-DKfnXBWN.js";import"./BasePdfViewer.module.css-B741bHaX.js";import"./PdfViewerAnnotationLayer-B-l1UzML.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B42gRU2O.js";import"./PdfViewerOutlineSidebar-CliVcaIm.js";import"./PdfViewerSidebarHeader-BebvL_UH.js";import"./useBaseUiId-_hIxwWiU.js";import"./useControlled-WPjc1su4.js";import"./CompositeRoot-BPwqQLoB.js";import"./CompositeItem-vz-X2T1a.js";import"./ToolbarRootContext-BawR_l4w.js";import"./composite-SE2iQFWF.js";import"./svgIconContainer-ZIKM4LC1.js";import"./PdfViewerSearchBar-QZwP9hIx.js";import"./chevron-up-Cvdd8isK.js";import"./chevron-down-C4Jmkz2d.js";import"./cross-C6M2F8_v.js";import"./PdfViewerSidebar-C5A3x_ci.js";import"./index-DlMkNRxq.js";import"./index-DT5Sidop.js";import"./index-OzD1TZjX.js";import"./PdfViewerToolbar-CLydSkjk.js";import"./Button-C7yTVROs.js";import"./chevron-right-SZyrxEgR.js";import"./Input-B7jz047V.js";import"./search-7jKLWuvF.js";import"./spin-CGGVORmA.js";import"./error-_mgoiawP.js";import"./withOsdkMetrics-BjqDzNow.js";import"./makeExternalStore-DfAT07Vb.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
