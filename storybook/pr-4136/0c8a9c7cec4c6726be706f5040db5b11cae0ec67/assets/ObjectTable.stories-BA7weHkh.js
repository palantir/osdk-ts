import{j as i}from"./iframe-CcC1m7dm.js";import{O as p}from"./object-table-z-o8Y4iJ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Mobp_CdS.js";import"./preload-helper-DeCk53aw.js";import"./Table-XdRQ7Pf5.js";import"./index-0gvTVOTK.js";import"./Dialog-DPbZCooR.js";import"./cross-DV51ECIz.js";import"./svgIconContainer-yjiCwwqK.js";import"./useBaseUiId-CzCqcGop.js";import"./InternalBackdrop-9qsE-EbY.js";import"./composite-tUxKNezP.js";import"./index-CEYaUBZr.js";import"./index-40ATCYrw.js";import"./index-BxRkQYGY.js";import"./useEventCallback-Blu-LJRb.js";import"./SkeletonBar-DnFTb433.js";import"./LoadingCell-n5L8BfX4.js";import"./ColumnConfigDialog-CmQYy65e.js";import"./DraggableList-BWAET7wQ.js";import"./search-BXFqiFKZ.js";import"./Input-CPQRmcYd.js";import"./useControlled-SAzSAZAO.js";import"./Button-D0RNeWLg.js";import"./small-cross-DS174T3T.js";import"./ActionButton-BhdUY9pE.js";import"./Checkbox-C12Dz3AB.js";import"./useValueChanged-BstO879O.js";import"./CollapsiblePanel-vSa8PNib.js";import"./MultiColumnSortDialog-BoKeQuHw.js";import"./MenuTrigger-CxgA7hxA.js";import"./CompositeItem-BC1QTYXK.js";import"./ToolbarRootContext-CjeMCr-E.js";import"./getDisabledMountTransitionStyles-1Tab1F_A.js";import"./getPseudoElementBounds-DJdribUH.js";import"./chevron-down-C2TUiN-F.js";import"./index-CNWy2Wzu.js";import"./error-hsPgizh-.js";import"./BaseCbacBanner-Cx9EGDV_.js";import"./makeExternalStore-cat_cA42.js";import"./Tooltip-B0OqTl9G.js";import"./PopoverPopup-C7-o66fe.js";import"./debounce-C2vAZ4aB.js";import"./useOsdkClient-DUcNDZWw.js";import"./tick-BhUO318A.js";import"./DropdownField-BHSw1oU1.js";import"./isEqual-vdF0S_a3.js";import"./withOsdkMetrics-Cqfc_v3H.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
