import{j as i}from"./iframe-DKFdWtvL.js";import{O as p}from"./object-table-CwQF-Dvg.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D90RKTxQ.js";import"./preload-helper-CE0EJEax.js";import"./Table-Cnic_cB3.js";import"./index-Zr7MzFSe.js";import"./Dialog-DJMUGRQJ.js";import"./cross-DwMbeucq.js";import"./svgIconContainer-mDDpTeTZ.js";import"./useBaseUiId-wiNmPbxB.js";import"./InternalBackdrop-CKISU8v0.js";import"./composite-Cu9id-g4.js";import"./index-CKHkcl8C.js";import"./index-BEWpIeZQ.js";import"./index-CMS4oCXy.js";import"./useEventCallback-CdZBxG17.js";import"./SkeletonBar-DudztDAH.js";import"./LoadingCell-0Z0FWm_3.js";import"./ColumnConfigDialog-CuArSFKY.js";import"./DraggableList-i9-ph0PR.js";import"./search-DRLDRoqN.js";import"./Input-veW-XqjJ.js";import"./useControlled-xNoP3k9v.js";import"./Button-DqI2Ud1s.js";import"./small-cross-DbCXQWOu.js";import"./ActionButton-Hgu8HEXX.js";import"./Checkbox-DOdBL_E2.js";import"./useValueChanged-DNoCn35O.js";import"./CollapsiblePanel-DFGZ9fUj.js";import"./MultiColumnSortDialog-Dug9W_Lj.js";import"./MenuTrigger-BV8zLsAt.js";import"./CompositeItem-BafBUoyW.js";import"./ToolbarRootContext-CrA7gaTE.js";import"./getDisabledMountTransitionStyles-DN20IWb_.js";import"./getPseudoElementBounds-Brijrk7L.js";import"./chevron-down-BKXttnNC.js";import"./index-Esiyv4F3.js";import"./error-D3OaIHY1.js";import"./BaseCbacBanner-BpbKfsaD.js";import"./makeExternalStore-De86ji-X.js";import"./Tooltip-tuRx1ZD5.js";import"./PopoverPopup-BZY02nqM.js";import"./debounce-BET9pivF.js";import"./useOsdkClient-oJ76J3S4.js";import"./tick-DJb0ub8N.js";import"./DropdownField-BJbaqXN1.js";import"./isEqual-CLy-jAf8.js";import"./withOsdkMetrics-DUGrXPH7.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
