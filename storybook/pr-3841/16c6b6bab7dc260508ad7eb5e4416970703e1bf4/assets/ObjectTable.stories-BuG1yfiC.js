import{j as i}from"./iframe-B_3axEb_.js";import{O as p}from"./object-table-B350mcID.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DVHzgl2E.js";import"./preload-helper-DVqF28Ob.js";import"./Table-qqzJxnMW.js";import"./index-WEswkdDQ.js";import"./Dialog-BtD6-2x7.js";import"./cross-COAB99ba.js";import"./svgIconContainer-Czb_u-B5.js";import"./useBaseUiId-mpVzZFod.js";import"./InternalBackdrop-CU6NWctY.js";import"./composite-k-oOtUOi.js";import"./index-BKGrISX8.js";import"./index-CV1QoXoI.js";import"./index-CsdjTlt6.js";import"./useEventCallback-DHGnwxNq.js";import"./SkeletonBar-7TcvHUms.js";import"./LoadingCell-BjRnr67f.js";import"./ColumnConfigDialog-B7-4JAIj.js";import"./DraggableList-L0zoz04e.js";import"./search-ClKVrDOr.js";import"./Input-BW6cPiJ8.js";import"./useControlled-DTpKBlZ0.js";import"./isEqual-ngVEl8Iu.js";import"./isObject-Dvc6D_PF.js";import"./Button-DViZAK3b.js";import"./ActionButton-CbwSb28k.js";import"./Checkbox-BDoaJcsA.js";import"./useValueChanged-CKmRTz9a.js";import"./CollapsiblePanel-CK4QXkOk.js";import"./MultiColumnSortDialog-EimSJagl.js";import"./MenuTrigger-D4X5URYr.js";import"./CompositeItem-BlbWDaOA.js";import"./ToolbarRootContext-D_DYze3I.js";import"./getDisabledMountTransitionStyles-SdFs7Ni0.js";import"./getPseudoElementBounds-DCzcjL9w.js";import"./chevron-down-DTB5Dfny.js";import"./index-DEGqs32K.js";import"./error-D2oTkGBT.js";import"./BaseCbacBanner-DShWLu3D.js";import"./makeExternalStore-C5zmjuzo.js";import"./Tooltip-BEIyqKN6.js";import"./PopoverPopup-yq2RTqAV.js";import"./toNumber-QrJPlThZ.js";import"./useOsdkClient-Dq0jfxt7.js";import"./tick-CkQdEScK.js";import"./DropdownField-CuTu35Y7.js";import"./withOsdkMetrics-DhHbJQbZ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
