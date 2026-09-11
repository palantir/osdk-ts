import{j as i}from"./iframe-Cjq1ziW_.js";import{O as p}from"./object-table-D6EdSbIy.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BKqTDpVK.js";import"./preload-helper-Bu64T0VB.js";import"./Table-DX-6NG8S.js";import"./index-DYLMtBRZ.js";import"./Dialog-CUVldmmV.js";import"./cross-5C9tDAb9.js";import"./svgIconContainer-eE0nci6v.js";import"./useBaseUiId-BOmEy4R4.js";import"./InternalBackdrop-DVWahY-J.js";import"./composite-DKerRgJC.js";import"./index-jdj57Z6r.js";import"./index-BNrT0csI.js";import"./index-B4fNfQ4Q.js";import"./useEventCallback-hAeTEmUL.js";import"./SkeletonBar-CxWNqWqz.js";import"./LoadingCell-CEZ_xtS5.js";import"./ColumnConfigDialog-JWUub0AX.js";import"./DraggableList-BTT7l4Iu.js";import"./search-CW8m2x0D.js";import"./Input-CltcJXck.js";import"./useControlled-B86_FVha.js";import"./Button-Sk9sqn-x.js";import"./small-cross-DpmUsxoH.js";import"./ActionButton-Bkt5pjan.js";import"./Checkbox-DwFQfO_0.js";import"./useValueChanged-Dp6WnvdX.js";import"./CollapsiblePanel-DZj9a81F.js";import"./MultiColumnSortDialog-BgeVtZYK.js";import"./MenuTrigger-vwiILOdw.js";import"./CompositeItem-BkoI9BcF.js";import"./ToolbarRootContext-D9vPb_4g.js";import"./getDisabledMountTransitionStyles-Dcwh1Csu.js";import"./getPseudoElementBounds-DZitm35h.js";import"./chevron-down-BLZAfqaw.js";import"./index-BlBIR37s.js";import"./error-BTbs61-N.js";import"./BaseCbacBanner-BKFpuCn3.js";import"./makeExternalStore-MDXzkZI-.js";import"./Tooltip-BbVYH3II.js";import"./PopoverPopup-DmxPEDNt.js";import"./debounce-CGyXk-2p.js";import"./useOsdkClient-D16wWo5-.js";import"./tick-B9mB2gxh.js";import"./DropdownField-Bw_qvOxg.js";import"./isEqual-2eOY9j-u.js";import"./withOsdkMetrics-DX_450NL.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
