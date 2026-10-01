import{j as i}from"./iframe-BBS1bhxz.js";import{O as p}from"./object-table-CM7ekgEE.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DsZu9MCM.js";import"./preload-helper-DbqFABQK.js";import"./Table-DEUb_dRE.js";import"./index-BwzBBeai.js";import"./Dialog-D2wutk-0.js";import"./cross-CNiIBNRR.js";import"./svgIconContainer-DkabfjQp.js";import"./useBaseUiId-CYB9Dsir.js";import"./InternalBackdrop-CCOzVtc1.js";import"./composite-6tiSR5Xk.js";import"./index-8i8Pb6X4.js";import"./index-KEup_jqV.js";import"./index-CnkYP-F4.js";import"./useEventCallback-B33OkFzu.js";import"./SkeletonBar-BUB4_ue2.js";import"./LoadingCell-ClWqsny_.js";import"./ColumnConfigDialog-DajqHBHt.js";import"./DraggableList-Dzhfo3BO.js";import"./search-DcQmB7Y_.js";import"./Input-xVXK2Roi.js";import"./useControlled-0gW62wDn.js";import"./Button-BB3rVnV9.js";import"./small-cross-Ch3xmnh1.js";import"./ActionButton-DGhxQdJx.js";import"./Checkbox-G67U5DCG.js";import"./useValueChanged-DRgrYEiY.js";import"./CollapsiblePanel-CLoilge1.js";import"./MultiColumnSortDialog-YQlGJpTo.js";import"./MenuTrigger-CSqVk1g8.js";import"./CompositeItem-BGGFMuw6.js";import"./ToolbarRootContext-COBR2HeU.js";import"./getDisabledMountTransitionStyles-C8xFS_dz.js";import"./getPseudoElementBounds-C9THLdDk.js";import"./chevron-down-CHLXsa5V.js";import"./index-DRQ9Ijyk.js";import"./error-D-l7GhZN.js";import"./BaseCbacBanner-D2vA0T6x.js";import"./makeExternalStore-CzAndpId.js";import"./Tooltip-IRK0CKSi.js";import"./PopoverPopup-DRjPHcEC.js";import"./debounce-EWPwneHB.js";import"./useOsdkClient-JNX9ytGe.js";import"./tick-WrvbSOaH.js";import"./DropdownField-Br5LnCsz.js";import"./isEqual-BCXdRNL7.js";import"./withOsdkMetrics-BcsPvRcs.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
