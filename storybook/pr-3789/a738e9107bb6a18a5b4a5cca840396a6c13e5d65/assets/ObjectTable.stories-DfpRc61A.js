import{j as i}from"./iframe-BXc0SdYp.js";import{O as p}from"./object-table-BhzTiGy9.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CWFC4MQk.js";import"./preload-helper-Dgu0aCKG.js";import"./Table-CZWHMe3M.js";import"./index-sKZCAMiv.js";import"./Dialog-Ck0WBglk.js";import"./cross-DSir2KfQ.js";import"./svgIconContainer-CtLj_lp3.js";import"./useBaseUiId-DqkkvKBG.js";import"./InternalBackdrop-XSqFwaTZ.js";import"./composite-BosRxt1T.js";import"./index-xPUR9HDc.js";import"./index-ZxZ1oX-Q.js";import"./index-Di-4g85M.js";import"./useEventCallback-BcN2mBKQ.js";import"./SkeletonBar-CUoKdRIy.js";import"./LoadingCell-DYSZMW2B.js";import"./ColumnConfigDialog-9DzDzX-f.js";import"./DraggableList-CVCqRl1M.js";import"./search-B6X43A4Z.js";import"./Input-CtK5iVsJ.js";import"./useControlled-BTSH1hwb.js";import"./isEqual-DsVvH1U9.js";import"./isObject-D_-UmL4L.js";import"./Button-V6iaqNOS.js";import"./ActionButton-C0nK6W1Z.js";import"./Checkbox-DxDlHoRI.js";import"./useValueChanged-CD0gYTJj.js";import"./CollapsiblePanel-B_jfSm5a.js";import"./MultiColumnSortDialog-CMwlnq_C.js";import"./MenuTrigger-Du5jMpS0.js";import"./CompositeItem-Bes2HBqU.js";import"./ToolbarRootContext-rpzDDNOx.js";import"./getDisabledMountTransitionStyles-DUAj8f-a.js";import"./getPseudoElementBounds-Co5ODb-3.js";import"./chevron-down-B0Age7bb.js";import"./index-DBAAGxWp.js";import"./error-B7ytnZ8A.js";import"./BaseCbacBanner-v42XuZEM.js";import"./makeExternalStore-CVfYdLVr.js";import"./Tooltip-C3STotTB.js";import"./PopoverPopup-Bl2Ueh2Q.js";import"./toNumber-Dw0dQ5w4.js";import"./useOsdkClient-DTGfF2y2.js";import"./tick-C6Lgjx3i.js";import"./DropdownField-jmX2jAzW.js";import"./withOsdkMetrics-D6nw3VcK.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
