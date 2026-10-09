import{j as r,M as s}from"./iframe-cBiyHty9.js";import{P as p}from"./pdf-viewer-DFCdmV4j.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-woPDQQYg.js";import"./preload-helper-Bv3meVH3.js";import"./PdfViewer-CIPM2mrh.js";import"./index-D9svWSdg.js";import"./BasePdfViewer-CY2S6g0Z.js";import"./BasePdfViewer.module.css-WudCuP3q.js";import"./PdfViewerAnnotationLayer-Dwx9ti6I.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D3LJ2mDk.js";import"./PdfViewerOutlineSidebar-c3X0u9q7.js";import"./PdfViewerSidebarHeader-mN8IWMxp.js";import"./useBaseUiId-DvsuiOVy.js";import"./useControlled-CK1iqSKb.js";import"./CompositeRoot-DICBneCX.js";import"./CompositeItem-CVN4lZoj.js";import"./ToolbarRootContext-C7-4unHr.js";import"./composite-CzYA3ElD.js";import"./svgIconContainer-BYeKHHBz.js";import"./PdfViewerSearchBar-BSd4GbRq.js";import"./chevron-up-CMsS-JIu.js";import"./chevron-down-X8NW_OEl.js";import"./cross-6ls1LaWh.js";import"./PdfViewerSidebar-DmLgydfd.js";import"./index-CBnbMMaT.js";import"./index-BjO7MMv7.js";import"./index-AEP3bJ8p.js";import"./PdfViewerToolbar-BwQBzxBi.js";import"./Button-BcVzWRXY.js";import"./chevron-right-G7tvS-5V.js";import"./Input-CUOeqbmp.js";import"./search-BHdPsWbB.js";import"./spin-CXRuReTv.js";import"./error-Ct0Hv0fs.js";import"./withOsdkMetrics-CoTXzMQi.js";import"./makeExternalStore-CGJamYgh.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
