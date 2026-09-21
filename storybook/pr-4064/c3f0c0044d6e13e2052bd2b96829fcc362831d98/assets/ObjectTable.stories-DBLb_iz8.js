import{j as i}from"./iframe-KfcHTeg1.js";import{O as p}from"./object-table-DCtIV20U.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BPlZ8hgp.js";import"./preload-helper-Bb9isu9Z.js";import"./Table-Bu6PSbB4.js";import"./index-R7bO3Ag2.js";import"./Dialog-D3f_elXv.js";import"./cross-CsyJ80xs.js";import"./svgIconContainer-Bg10ywbV.js";import"./useBaseUiId-BkW36jG5.js";import"./InternalBackdrop-tVRu2lpW.js";import"./composite-SXE3lJSt.js";import"./index-Bw8KhB5T.js";import"./index-C2P4ds86.js";import"./index-BcYBVJtM.js";import"./useEventCallback-BLr_WVRC.js";import"./SkeletonBar-DDrD9EIz.js";import"./LoadingCell-C5uiI7TM.js";import"./ColumnConfigDialog-DeCZb3On.js";import"./DraggableList-xC7GwQ38.js";import"./search-srmRE2lv.js";import"./Input-CN3mZMt5.js";import"./useControlled-BGj-689N.js";import"./Button-DOEhPeJL.js";import"./small-cross-Cn9FtNXX.js";import"./ActionButton-Btyaoa61.js";import"./Checkbox-DqEzFRsP.js";import"./useValueChanged-Dz43bSNR.js";import"./CollapsiblePanel-Dv-wcfHr.js";import"./MultiColumnSortDialog-Bc6MK8qj.js";import"./MenuTrigger-D9ZtQcHZ.js";import"./CompositeItem-D4098fQy.js";import"./ToolbarRootContext-C0NLRCfZ.js";import"./getDisabledMountTransitionStyles-kkxHQkYj.js";import"./getPseudoElementBounds-CH0zahJv.js";import"./chevron-down-Vk4ljz0Y.js";import"./index-BPifgcSB.js";import"./error-BE8S7DUo.js";import"./BaseCbacBanner-BM0cDlRR.js";import"./makeExternalStore-Dw3huE5n.js";import"./Tooltip-BQBI28hZ.js";import"./PopoverPopup-BMw0y_rW.js";import"./debounce-2PRfpVgw.js";import"./useOsdkClient-B3A79I8Y.js";import"./tick-DVTuPHTD.js";import"./DropdownField-vOLnZeMB.js";import"./isEqual-asrTyJs0.js";import"./withOsdkMetrics-B7xTPOdu.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
