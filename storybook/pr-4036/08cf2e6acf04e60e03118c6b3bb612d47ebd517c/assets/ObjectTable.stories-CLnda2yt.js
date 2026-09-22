import{j as i}from"./iframe-qmzCXWN4.js";import{O as p}from"./object-table-C1mW-ore.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-N1dX_uvq.js";import"./preload-helper-DfaqjKYe.js";import"./Table-CP9UXHBo.js";import"./index-BHXsooho.js";import"./Dialog-BlF9tEPt.js";import"./cross-CQlGHY78.js";import"./svgIconContainer-IgiOu0RR.js";import"./useBaseUiId-BJvBYugX.js";import"./InternalBackdrop-CgDKP17E.js";import"./composite-DL4bYzm9.js";import"./index-Cejy0gyw.js";import"./index-ChmUS2LB.js";import"./index-wI8QjcAS.js";import"./useEventCallback-8Q0F8-SM.js";import"./SkeletonBar-CSPSdf3f.js";import"./LoadingCell-Dcxpo96m.js";import"./ColumnConfigDialog-C4aEhu1N.js";import"./DraggableList-B-XECCar.js";import"./search-Diu7klqt.js";import"./Input-CFsjF6HE.js";import"./useControlled-BcZ-NiAO.js";import"./Button-DAis4ZgI.js";import"./small-cross-Cf0sj-e3.js";import"./ActionButton-CU7TeyVP.js";import"./Checkbox-CKk9nv02.js";import"./useValueChanged-CqxUQgrJ.js";import"./CollapsiblePanel-D_Wdr9Hn.js";import"./MultiColumnSortDialog-BwLc6nJW.js";import"./MenuTrigger-axdjtxqW.js";import"./CompositeItem-Csvh_d0_.js";import"./ToolbarRootContext-DGUkZWal.js";import"./getDisabledMountTransitionStyles-C0YhA-Ys.js";import"./getPseudoElementBounds-C3iFuC2O.js";import"./chevron-down-Dwy6C3BH.js";import"./index-DQfy-mzv.js";import"./error-BLaFtDHL.js";import"./BaseCbacBanner-BLrAnx8v.js";import"./makeExternalStore-BXxLBZ9K.js";import"./Tooltip-CZjN0xGR.js";import"./PopoverPopup-Bodc44xX.js";import"./debounce-DcZ-cQ5_.js";import"./useOsdkClient-CBhT0OrD.js";import"./tick-Dwo8b7et.js";import"./DropdownField-DZLyjXC2.js";import"./isEqual-DfvWC4cG.js";import"./withOsdkMetrics-D5CdmZxO.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
