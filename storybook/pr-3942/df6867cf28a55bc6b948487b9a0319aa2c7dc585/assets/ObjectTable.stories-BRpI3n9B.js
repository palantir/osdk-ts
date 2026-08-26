import{j as i}from"./iframe-CpSXGIMP.js";import{O as p}from"./object-table-BfhkxOeM.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DWX_Km0I.js";import"./preload-helper-BAIK3F_r.js";import"./Table-C1hP_W1k.js";import"./index-CKAzeimB.js";import"./Dialog-20OrDQWb.js";import"./cross-CzQoIi7Z.js";import"./svgIconContainer-DUtflVNj.js";import"./useBaseUiId-D-3zNuFz.js";import"./InternalBackdrop-DZlr-aNU.js";import"./composite-B3b5WAJp.js";import"./index-Cik8okmC.js";import"./index-B7KWUsJB.js";import"./index-DftJEGwA.js";import"./useEventCallback-BBf_aYTc.js";import"./SkeletonBar-CNXCAGmc.js";import"./LoadingCell-D_8obgOr.js";import"./ColumnConfigDialog-BTrG7a_x.js";import"./DraggableList-DXHuvwR9.js";import"./search-CuxqOQhv.js";import"./Input-UzrhFg4t.js";import"./useControlled-BmzJBEAD.js";import"./Button-68wBS86H.js";import"./small-cross-DWFx64Mr.js";import"./ActionButton-Dz39mG8V.js";import"./Checkbox-sbgttWZA.js";import"./useValueChanged-BqjXh4dX.js";import"./CollapsiblePanel-BeRSQgN_.js";import"./MultiColumnSortDialog-C2n86c34.js";import"./MenuTrigger-D4bpA_BO.js";import"./CompositeItem-DSORcIfD.js";import"./ToolbarRootContext-DEzzSQ1U.js";import"./getDisabledMountTransitionStyles-MU4kd6R3.js";import"./getPseudoElementBounds-Ce2XLvLP.js";import"./chevron-down-Btszu4M0.js";import"./index-B-U1HPP1.js";import"./error-Cwk6m0y9.js";import"./BaseCbacBanner-BTg5nBuQ.js";import"./makeExternalStore-DmkWZ8pD.js";import"./Tooltip-a-xfMqZ7.js";import"./PopoverPopup-B2SsDUTB.js";import"./debounce-TFuakvIj.js";import"./useOsdkClient-nFyg2naI.js";import"./tick-FjTw9avv.js";import"./DropdownField-D9b5Vmbe.js";import"./isEqual-D1jnOiv1.js";import"./withOsdkMetrics-DDed3ono.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
