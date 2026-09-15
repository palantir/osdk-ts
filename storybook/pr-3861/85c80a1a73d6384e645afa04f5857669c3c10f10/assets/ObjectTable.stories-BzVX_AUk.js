import{j as i}from"./iframe-DxvN0M7K.js";import{O as p}from"./object-table-tqCZagOx.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BqIqqf7C.js";import"./preload-helper-xzue2qXM.js";import"./Table-Cdw-5bp-.js";import"./index-DH5yemLr.js";import"./Dialog-Dv18KT1A.js";import"./cross-Jl3VvOEN.js";import"./svgIconContainer-C1vr-TwX.js";import"./useBaseUiId-6JQrMuoN.js";import"./InternalBackdrop-DQMzxTt2.js";import"./composite-BeC4x7c_.js";import"./index-D6YwkaJN.js";import"./index-CGz3Zj9V.js";import"./index-Je9DGe3Q.js";import"./useEventCallback-BarKJY3w.js";import"./SkeletonBar-CSNEJW0Z.js";import"./LoadingCell-CL-i8o3K.js";import"./ColumnConfigDialog-CRLVMU6N.js";import"./DraggableList-CAVKVRtK.js";import"./search-CWcacXbv.js";import"./Input-B5Cdt3Jn.js";import"./useControlled-BsKyqVLJ.js";import"./Button-DeN2HtXI.js";import"./small-cross-loFzvmde.js";import"./ActionButton-DJcBANww.js";import"./Checkbox-CwFAjL8W.js";import"./useValueChanged-znjzpbIG.js";import"./CollapsiblePanel-DcmIoP-V.js";import"./MultiColumnSortDialog-vlUBa-ho.js";import"./MenuTrigger-BYErkqlu.js";import"./CompositeItem-BM5p6vye.js";import"./ToolbarRootContext-8cNXmzWC.js";import"./getDisabledMountTransitionStyles-CQnjWCro.js";import"./getPseudoElementBounds-1Yq4M1ZX.js";import"./chevron-down-B07rpeLd.js";import"./index-CiwVfYV4.js";import"./error-Cr5iHDkF.js";import"./BaseCbacBanner-Cc8KfJds.js";import"./makeExternalStore-BQakVy-m.js";import"./Tooltip-3Unl917J.js";import"./PopoverPopup-D_lg3L_T.js";import"./debounce-HGjeRSVo.js";import"./useOsdkClient-BrNoGZi-.js";import"./tick-C0cXmT53.js";import"./DropdownField-CkxYhY96.js";import"./isEqual--3ZKqA7b.js";import"./withOsdkMetrics-BeV-dE9b.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal setup showing Employee data with default column definitions."
      },
      source: {
        code: \`<ObjectTable objectType={Employee} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // Loads data, then opens a column header menu to confirm the default,
  // out-of-the-box header features are all present.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for the (MSW-mocked) rows to load.
    await canvas.findByText(TARGET_DATA);
    await openHeaderMenu(canvas, "fullName");
    await expect(await screen.findByRole("menuitem", {
      name: "Sort ascending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Sort descending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Pin column"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Configure Columns"
    })).toBeInTheDocument();

    // Dismiss the menu so the story is left in a clean state.
    await userEvent.keyboard("{Escape}");
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const de=["Default"];export{n as Default,de as __namedExportsOrder,ue as default};
