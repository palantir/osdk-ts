import{j as i}from"./iframe-KU9UF-HD.js";import{O as p}from"./object-table-DrS3gL9T.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-lseoCQGm.js";import"./preload-helper-Dqh0wZ2N.js";import"./Table-XdQgP9TG.js";import"./index-C_Sqgn7G.js";import"./Dialog-DblEXQa7.js";import"./cross-DKVxU0vG.js";import"./svgIconContainer-B9-V7dQw.js";import"./useBaseUiId-DoU6rO79.js";import"./InternalBackdrop-zwrZRiWG.js";import"./composite-CgL8wB-0.js";import"./index-COBeGTh1.js";import"./index-DvccYxK1.js";import"./index-CbFKn6SO.js";import"./useEventCallback-Xvi1rtsL.js";import"./SkeletonBar-CA3bHLco.js";import"./LoadingCell-D4mvPFrH.js";import"./ColumnConfigDialog-DzLGAe8w.js";import"./DraggableList-DoLFOuKy.js";import"./search-CM8qjOlV.js";import"./Input-D0hsZPVl.js";import"./useControlled-BFyqY8nn.js";import"./isEqual-C9E2_N5N.js";import"./isObject-CcQhopsJ.js";import"./Button-Dx_Hy474.js";import"./ActionButton-DuQolFVX.js";import"./Checkbox-ClqYZBVr.js";import"./useValueChanged-Bthc0dAB.js";import"./CollapsiblePanel-DPyCltIZ.js";import"./MultiColumnSortDialog-uAHUp7ML.js";import"./MenuTrigger-D3r6zpiC.js";import"./CompositeItem-CUcahBHg.js";import"./ToolbarRootContext-Dxnyr84z.js";import"./getDisabledMountTransitionStyles-DvWpsgyl.js";import"./getPseudoElementBounds-CivnY4w8.js";import"./chevron-down-CVXhBImd.js";import"./index-B-ApflCd.js";import"./error-6yDwFave.js";import"./BaseCbacBanner-DqeMmN8d.js";import"./makeExternalStore-_neCuudA.js";import"./Tooltip-DL_3VSwR.js";import"./PopoverPopup-8kqMbkfH.js";import"./toNumber-D60oT1WS.js";import"./useOsdkClient-BbbNdZZX.js";import"./tick-lXnSKMHf.js";import"./DropdownField-CSHkKzua.js";import"./withOsdkMetrics-CyPRFmfB.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
