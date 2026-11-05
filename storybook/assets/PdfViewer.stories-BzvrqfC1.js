import{j as r,M as s}from"./iframe-22sgaWxv.js";import{P as p}from"./pdf-viewer-CjHL9X-i.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CoB_S264.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-Ba84liWB.js";import"./index-BHBAGN-s.js";import"./BasePdfViewer-IOJ8Lp4p.js";import"./BasePdfViewer.module.css-CUf8siUV.js";import"./PdfViewerAnnotationLayer-C5McJZhq.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cwg4uHWr.js";import"./PdfViewerOutlineSidebar-Co_CGpVk.js";import"./PdfViewerSidebarHeader-BZ_7-I_o.js";import"./useBaseUiId-CUViOtvX.js";import"./useControlled-9hZ525gD.js";import"./CompositeRoot-B7CSn7Mo.js";import"./CompositeItem-C3Np8qjM.js";import"./ToolbarRootContext-D1WVL4z4.js";import"./composite-BTcqQx01.js";import"./svgIconContainer-BsVzcm6E.js";import"./PdfViewerSearchBar-C3e04f3P.js";import"./chevron-up-DQ25MapY.js";import"./chevron-down-BNxx7PXr.js";import"./cross-BCwFnrJl.js";import"./PdfViewerSidebar-bLRg4h0n.js";import"./index-DzYoB3O-.js";import"./index-C-ayeZqv.js";import"./index-H6bUqLk6.js";import"./PdfViewerToolbar-B633P6rS.js";import"./Button-Tlz3cekG.js";import"./chevron-right-Ck2PHwzn.js";import"./Input-kE2itjKl.js";import"./search-D5hLmpm3.js";import"./spin-ja_vbhPs.js";import"./error-DkFYgz--.js";import"./withOsdkMetrics-BykLiONE.js";import"./makeExternalStore-D5ROsNAp.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
