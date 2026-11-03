import{j as i}from"./iframe-D9CyQ-7D.js";import{O as p}from"./object-table-DO3hxB-o.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BwUrOSQa.js";import"./preload-helper-D5O23N40.js";import"./Table-GRdDa-oK.js";import"./index-DuJGsL9q.js";import"./Dialog-DKCrkoAO.js";import"./cross-BenluPmH.js";import"./svgIconContainer-AOGkHpnu.js";import"./useBaseUiId-D_fLEN6E.js";import"./InternalBackdrop-DeKeGHaG.js";import"./composite-XfhWG8gu.js";import"./index-1c9qBFFa.js";import"./index-AxS2IGOk.js";import"./index-BOD_CvT4.js";import"./useEventCallback-ypal6-pO.js";import"./SkeletonBar-Cv4TXNgc.js";import"./LoadingCell-B6Dj7aLc.js";import"./ColumnConfigDialog-BC-wDrCL.js";import"./DraggableList-DH_wtghe.js";import"./search-DGt86ZvF.js";import"./Input-CmtlVQ4G.js";import"./useControlled-C_-Glr9o.js";import"./Button-BQcwiuJB.js";import"./small-cross-B9cBwOBi.js";import"./ActionButton-BfglUtnD.js";import"./Checkbox-C2wClEH5.js";import"./useValueChanged-CjMx0qik.js";import"./CollapsiblePanel-mjI7efHF.js";import"./MultiColumnSortDialog-CM7ThF2W.js";import"./MenuTrigger-Dy26HhZf.js";import"./CompositeItem-DcIoFALJ.js";import"./ToolbarRootContext-BcdYYsZZ.js";import"./getDisabledMountTransitionStyles-D4n7H05A.js";import"./getPseudoElementBounds-DDgTpPXV.js";import"./chevron-down-CdLJsGpG.js";import"./index-D1YdEA6M.js";import"./error-C3QVKQPv.js";import"./BaseCbacBanner-DTcSoVNL.js";import"./makeExternalStore-tubzd2Ls.js";import"./Tooltip-DYOaLqjU.js";import"./PopoverPopup-B0CqW0hV.js";import"./debounce-Axu-J2_C.js";import"./useOsdkClient-WrTrHCKg.js";import"./tick-BiI5E4yJ.js";import"./DropdownField-GBcl7Wc9.js";import"./isEqual-Zl9340i5.js";import"./withOsdkMetrics-C8sht1w0.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
