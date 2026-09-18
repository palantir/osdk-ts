import{j as i}from"./iframe-BHPDqCFq.js";import{O as p}from"./object-table-CX4l4Dfs.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-ChlgCrlh.js";import"./preload-helper-C8dKT6c-.js";import"./Table-C8-fBgPi.js";import"./index-Cxj4mfK8.js";import"./Dialog-CwB0Ilia.js";import"./cross-BHJaWm-f.js";import"./svgIconContainer-COam26m3.js";import"./useBaseUiId-CT4jboOp.js";import"./InternalBackdrop-Csoal8gm.js";import"./composite-BIm8cUf1.js";import"./index-DJH664Hp.js";import"./index-JmqbywhK.js";import"./index-DX8xiCXa.js";import"./useEventCallback-Ddnv-q8o.js";import"./SkeletonBar-P8jlFumX.js";import"./LoadingCell-Btv4P7kZ.js";import"./ColumnConfigDialog-R1h9StJE.js";import"./DraggableList-DDTm5yW2.js";import"./search-ROafySNP.js";import"./Input-BmuqUAJQ.js";import"./useControlled-BLanU1Cz.js";import"./Button-D6w0YH3F.js";import"./small-cross-DRE_PaJF.js";import"./ActionButton--zxznfMJ.js";import"./Checkbox-jOQfJbyM.js";import"./useValueChanged-D1mPBuzM.js";import"./CollapsiblePanel-COsf17xI.js";import"./MultiColumnSortDialog-MYyYNbXm.js";import"./MenuTrigger-OO1PFXFs.js";import"./CompositeItem-BRFTKS6k.js";import"./ToolbarRootContext-BieBN5Ud.js";import"./getDisabledMountTransitionStyles-BYu2K8x7.js";import"./getPseudoElementBounds-CM7RrIA6.js";import"./chevron-down-X9qExTnz.js";import"./index-DGoUYVsX.js";import"./error-Wz7v_t0s.js";import"./BaseCbacBanner-D6ekieQG.js";import"./makeExternalStore-CIZbbQ8M.js";import"./Tooltip-CCOQG__R.js";import"./PopoverPopup-CnlmGlie.js";import"./debounce-DVRH7VUD.js";import"./useOsdkClient-DdfWwqYU.js";import"./tick-CJnrQrNa.js";import"./DropdownField-CDw7d_jR.js";import"./isEqual-DZlpwNeT.js";import"./withOsdkMetrics-Ben-Mf35.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
