import{j as i}from"./iframe-BTufhzDU.js";import{O as p}from"./object-table-CCtZX51e.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DiTtOWod.js";import"./preload-helper-18tKsGVi.js";import"./Table-BytxhvGb.js";import"./index-Bgh_kCmT.js";import"./Dialog-C9s3lFhW.js";import"./cross-CDJmthjs.js";import"./svgIconContainer-CIDYFOR4.js";import"./useBaseUiId-B_rOieJo.js";import"./InternalBackdrop-BOulsSWB.js";import"./composite-C_GDjy5Q.js";import"./index-COZLl5wP.js";import"./index-B-UiCFnv.js";import"./index-D_PI1Th3.js";import"./useEventCallback-D-COXZHZ.js";import"./SkeletonBar-ymkmzl6c.js";import"./LoadingCell-DYZ88Ngb.js";import"./ColumnConfigDialog-CMRAL8K2.js";import"./DraggableList-CSkdx2wi.js";import"./search-DSjsSTcq.js";import"./Input-GDvhao2V.js";import"./useControlled-B8odZqt5.js";import"./Button-C08Dl8zL.js";import"./small-cross-DeBGztGD.js";import"./ActionButton-CDYSucfC.js";import"./Checkbox-Byh7Dyfc.js";import"./useValueChanged-yHO5JJpr.js";import"./CollapsiblePanel-DnLCtJrZ.js";import"./MultiColumnSortDialog-DHZpgmw8.js";import"./MenuTrigger-C7Fb3nhC.js";import"./CompositeItem-C2mdT24u.js";import"./ToolbarRootContext-c-VxwH3T.js";import"./getDisabledMountTransitionStyles-CJ4mZ_K7.js";import"./getPseudoElementBounds-BRhWDMTt.js";import"./chevron-down-CqOeUkb7.js";import"./index-DEr9UFjH.js";import"./error-DOFx9qT5.js";import"./BaseCbacBanner-52v7dT8q.js";import"./makeExternalStore-CzdIOkHP.js";import"./Tooltip-CqNQQfxr.js";import"./PopoverPopup-vY6UzFEA.js";import"./debounce-BhoGA986.js";import"./useOsdkClient-tOUmwv_4.js";import"./tick-DEzBGa0_.js";import"./DropdownField-Y24yrVFb.js";import"./isEqual-jP6H4NT-.js";import"./withOsdkMetrics-BNGLvviV.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
