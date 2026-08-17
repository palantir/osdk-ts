import{j as i}from"./iframe-BykysWv2.js";import{O as p}from"./object-table-VL2pIuSS.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CmeHMb5o.js";import"./preload-helper-D-tSwkR5.js";import"./Table-DKKJuYn2.js";import"./index-CCmH1fLx.js";import"./Dialog-BYmQ2lK1.js";import"./cross-C6UPhC48.js";import"./svgIconContainer-DuuAzJ-q.js";import"./useBaseUiId-BtfasykQ.js";import"./InternalBackdrop-DcsekBaZ.js";import"./composite-DVza1WGR.js";import"./index-CdS3MnO1.js";import"./index-D5tO8tmB.js";import"./index-Cqonjd7p.js";import"./useEventCallback-B4_uUg37.js";import"./SkeletonBar-XxmSe_Cp.js";import"./LoadingCell-DjZgc0r1.js";import"./ColumnConfigDialog-B17ARdeN.js";import"./DraggableList-DRSLRpqD.js";import"./search-BDkejYae.js";import"./Input-B6kNrbT5.js";import"./useControlled-BHDm0MR_.js";import"./Button-CmlMFMdB.js";import"./small-cross-CSSivirH.js";import"./ActionButton-DSbQbnUR.js";import"./Checkbox-D24EyxhG.js";import"./useValueChanged-C9e2VdUl.js";import"./CollapsiblePanel-CXUAw-hA.js";import"./MultiColumnSortDialog-T2inBz5a.js";import"./MenuTrigger-DAeKyCnh.js";import"./CompositeItem-B2Va5Uj8.js";import"./ToolbarRootContext-hgVSKpi4.js";import"./getDisabledMountTransitionStyles-DPi8XNEW.js";import"./getPseudoElementBounds-84sUmk7I.js";import"./chevron-down-BhIvQaF5.js";import"./index-D5SG44W0.js";import"./error-DoPIKpmU.js";import"./BaseCbacBanner-iC1JAFKe.js";import"./makeExternalStore-Efjiv4ks.js";import"./Tooltip-D6tequ9v.js";import"./PopoverPopup-7-Z1ZTD2.js";import"./debounce-BQifmnVJ.js";import"./useOsdkClient-BSt3qc0S.js";import"./tick-bGW9sZOi.js";import"./DropdownField-xIr7Ptnm.js";import"./isEqual-CY52NdiV.js";import"./withOsdkMetrics-byqTEtiY.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
