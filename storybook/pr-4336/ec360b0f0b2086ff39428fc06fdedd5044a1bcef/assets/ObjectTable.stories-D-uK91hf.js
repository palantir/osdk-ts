import{j as i}from"./iframe-Dl_BVvAW.js";import{O as p}from"./object-table-BDyuzjHe.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BGe9qQwZ.js";import"./preload-helper-CoCSiyLk.js";import"./Table-Cg6d06Ds.js";import"./index-BCGo89vi.js";import"./Dialog-DoT1m57-.js";import"./cross-Bz7-buWb.js";import"./svgIconContainer-DBQRMjom.js";import"./useBaseUiId-C3O-rg1C.js";import"./InternalBackdrop-CzP1TDn8.js";import"./composite-4Jq0kXzk.js";import"./index-DjDfcFev.js";import"./index-DbV-fkKm.js";import"./index-mlQ_3NiE.js";import"./useEventCallback-BIPIgLC4.js";import"./SkeletonBar-CkZhiozq.js";import"./LoadingCell-CtF7-axq.js";import"./ColumnConfigDialog-DmTwLoDJ.js";import"./DraggableList-eYI9b4yQ.js";import"./search-DcMarGsx.js";import"./Input-B7ojI8Bn.js";import"./useControlled-Dp4z1YLv.js";import"./Button-6LB6U_zx.js";import"./small-cross-ylm6BbvG.js";import"./ActionButton-YXW6TfiH.js";import"./Checkbox-Bq3GWGsZ.js";import"./useValueChanged-BEGJF59V.js";import"./CollapsiblePanel-DzeHzdVK.js";import"./MultiColumnSortDialog-C1yu8aIu.js";import"./MenuTrigger-UmSIhiTA.js";import"./CompositeItem-CxQ8ZZ6u.js";import"./ToolbarRootContext-CvPGHntn.js";import"./getDisabledMountTransitionStyles-Cza0XV9J.js";import"./getPseudoElementBounds-CjBI2crg.js";import"./chevron-down-BnUWx6eY.js";import"./index-C3M7Abp4.js";import"./error-iTPjK_eI.js";import"./BaseCbacBanner-Db-QnP4F.js";import"./makeExternalStore-BEEUYNQZ.js";import"./Tooltip-C_bDdnEa.js";import"./PopoverPopup-BI4UjKoA.js";import"./debounce-DTEEbj35.js";import"./useOsdkClient-DMf9xJpa.js";import"./tick-hY0SSYQk.js";import"./DropdownField-bRExs2os.js";import"./isEqual-BJK4xPpC.js";import"./withOsdkMetrics-auuyIGEA.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
