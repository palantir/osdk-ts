import{j as i}from"./iframe-el7bjSAH.js";import{O as p}from"./object-table-CiBVhktO.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CH46hnqF.js";import"./preload-helper-DLIuAVkn.js";import"./Table-D1tnOVr7.js";import"./index-DqdFzNH7.js";import"./Dialog-D3Ep4Clz.js";import"./cross-DKrIoJp0.js";import"./svgIconContainer-DsqZkZNx.js";import"./useBaseUiId-BMJSE7oP.js";import"./InternalBackdrop-BMvERWIA.js";import"./composite-CNO4lqFc.js";import"./index-C95mnJoM.js";import"./index-0oAMicpD.js";import"./index-BVkx0JYL.js";import"./useEventCallback-ENJpX7A2.js";import"./SkeletonBar-Cm8w6Wrq.js";import"./LoadingCell-m0XW9yVV.js";import"./ColumnConfigDialog-DOZjlzUx.js";import"./DraggableList-IhqU2Qp8.js";import"./search-BcW8-7NR.js";import"./Input-CL8_Xm7J.js";import"./useControlled-B75sCM7T.js";import"./Button-CzJbluPV.js";import"./small-cross-DlbYuuLD.js";import"./ActionButton-CHJoFoX3.js";import"./Checkbox-DIklOqmF.js";import"./useValueChanged-DS-0ugoh.js";import"./CollapsiblePanel-BVK3lBnv.js";import"./MultiColumnSortDialog-Cs-ZlCP3.js";import"./MenuTrigger-BcJHHzDt.js";import"./CompositeItem-2Q_-fuaz.js";import"./ToolbarRootContext-B3AP-FE_.js";import"./getDisabledMountTransitionStyles-D3JoAvA2.js";import"./getPseudoElementBounds-Dey8uGuB.js";import"./chevron-down-C0Gm8Kcu.js";import"./index-BxJn0x3b.js";import"./error-D7fY3cPV.js";import"./BaseCbacBanner-DptezKCq.js";import"./makeExternalStore-F3_wqthP.js";import"./Tooltip-LLGUzx8a.js";import"./PopoverPopup-DwVOyFYi.js";import"./debounce-jh4ZJlD3.js";import"./useOsdkClient-d2eky65A.js";import"./tick-0qxmk6XW.js";import"./DropdownField-CmRqBaKg.js";import"./isEqual-DChMwUp_.js";import"./withOsdkMetrics-BlbIxaEE.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
