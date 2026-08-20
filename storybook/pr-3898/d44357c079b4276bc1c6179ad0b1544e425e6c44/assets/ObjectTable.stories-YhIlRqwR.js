import{j as i}from"./iframe-t1WFPDhw.js";import{O as p}from"./object-table-CM4LWrT7.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-stvAeGGn.js";import"./preload-helper-Da1tS92Z.js";import"./Table-D9YyYKJG.js";import"./index-B1GoUeLu.js";import"./Dialog-iYk-qLDT.js";import"./cross-Da_GAL_u.js";import"./svgIconContainer-BUiS1VCJ.js";import"./useBaseUiId-DK5GeXHs.js";import"./InternalBackdrop-X4TLWAFu.js";import"./composite-CDJe9A1X.js";import"./index-BzHvcWdE.js";import"./index-Dip6e6D7.js";import"./index-CCSLCfC8.js";import"./useEventCallback-D5whHqAd.js";import"./SkeletonBar-0mKrafZV.js";import"./LoadingCell-CzahNsbw.js";import"./ColumnConfigDialog-VgnAAr63.js";import"./DraggableList-CZWbxLce.js";import"./search-CoPwATRc.js";import"./Input-YG1B-d52.js";import"./useControlled-IVlR0_Jk.js";import"./Button-DqjYckjv.js";import"./small-cross-Y2YAVcxh.js";import"./ActionButton-CSa1amr2.js";import"./Checkbox-XNLLdOyi.js";import"./useValueChanged-DnMgpkTo.js";import"./CollapsiblePanel-C4bYsB-J.js";import"./MultiColumnSortDialog-kqu51bhw.js";import"./MenuTrigger-B4Wp0rdW.js";import"./CompositeItem-LJuZmcxS.js";import"./ToolbarRootContext-B23-OKwl.js";import"./getDisabledMountTransitionStyles-N6Q2XM1y.js";import"./getPseudoElementBounds-DH13kVRk.js";import"./chevron-down-qM8DZerS.js";import"./index-Cro2QC3a.js";import"./error-DceejFAv.js";import"./BaseCbacBanner-DOwOWdTM.js";import"./makeExternalStore-Dd5JFSU6.js";import"./Tooltip-LZicG85w.js";import"./PopoverPopup-DGsDtEIW.js";import"./debounce-VPb6bal0.js";import"./useOsdkClient--18P-rAC.js";import"./tick-D8Y9Kfxj.js";import"./DropdownField-CkzRub5e.js";import"./isEqual-BXF7jnDz.js";import"./withOsdkMetrics-BIBpp3u3.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
