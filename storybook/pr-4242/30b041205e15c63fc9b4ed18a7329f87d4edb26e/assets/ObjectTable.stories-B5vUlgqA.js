import{j as i}from"./iframe-CImoBJWj.js";import{O as p}from"./object-table-DL5c9H-I.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-IIrteiuA.js";import"./preload-helper-IQX6vey9.js";import"./Table-CQfoTNXr.js";import"./index-Cup5tXcg.js";import"./Dialog-gzf1dTtp.js";import"./cross-BqnYY50C.js";import"./svgIconContainer-CDIM8d0X.js";import"./useBaseUiId-DK9CjSol.js";import"./InternalBackdrop-1dyRFkhN.js";import"./composite-wTqD7xb9.js";import"./index-Bp-sZfW0.js";import"./index-BO30NG2p.js";import"./index-B-OKDmMN.js";import"./useEventCallback-8HkFD2y4.js";import"./SkeletonBar-lAqm2yHw.js";import"./LoadingCell-CpuycdTi.js";import"./ColumnConfigDialog-BFF9Iipx.js";import"./DraggableList-C6WGiMx5.js";import"./search-C3EkrB74.js";import"./Input-Soc66haA.js";import"./useControlled-5ShBBeuE.js";import"./Button-DBcwhCWE.js";import"./small-cross-DUFIOJxP.js";import"./ActionButton-BVwRTNVr.js";import"./Checkbox-BeFewm7l.js";import"./useValueChanged-DU8FQ44D.js";import"./CollapsiblePanel-C80L8NQi.js";import"./MultiColumnSortDialog-BppAEswF.js";import"./MenuTrigger-Z2wUq8Et.js";import"./CompositeItem-wd-v0oiM.js";import"./ToolbarRootContext-UrwTEYWQ.js";import"./getDisabledMountTransitionStyles-CETjyBx5.js";import"./getPseudoElementBounds-BLg8_Dqh.js";import"./chevron-down-By6KsCFI.js";import"./index-CvP_uE7p.js";import"./error-BhWP_ezt.js";import"./BaseCbacBanner-CJB9uIFr.js";import"./makeExternalStore-DWGtL2cW.js";import"./Tooltip-C-UE3W8B.js";import"./PopoverPopup-B6cucSon.js";import"./debounce-CkFI5VMc.js";import"./useOsdkClient-DqZgonFV.js";import"./tick-B2SLTcTU.js";import"./DropdownField-BPXOmhtU.js";import"./isEqual-CLpA2JNp.js";import"./withOsdkMetrics-BzR5lmI7.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
