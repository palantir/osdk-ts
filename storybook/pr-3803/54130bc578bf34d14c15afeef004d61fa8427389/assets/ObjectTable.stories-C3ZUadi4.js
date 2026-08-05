import{j as i}from"./iframe-S-vStvKN.js";import{O as p}from"./object-table-Bc2gw699.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D7JDN7gx.js";import"./preload-helper-BJgwrY7C.js";import"./Table-DpsOR7BT.js";import"./index-CbjwQjV5.js";import"./Dialog-BbuSvdGx.js";import"./cross-BYqG8NZ_.js";import"./svgIconContainer-BJmrTafn.js";import"./useBaseUiId-C0o_RGcW.js";import"./InternalBackdrop-CI81YycS.js";import"./composite-wryo-yVl.js";import"./index-BSoJFv-J.js";import"./index-BAYRy6lS.js";import"./index-B6dHyZSn.js";import"./useEventCallback-C_bR-xWa.js";import"./SkeletonBar-Cs7INo5x.js";import"./LoadingCell-j08RKrR3.js";import"./ColumnConfigDialog-CHXdiGh3.js";import"./DraggableList-CgAY9KZb.js";import"./search-C-pD2cWO.js";import"./Input-BSmAlFZc.js";import"./useControlled-C5Iajxos.js";import"./isEqual-yH-WgjXi.js";import"./isObject-x2M0ZODa.js";import"./Button-DDxw7Nns.js";import"./ActionButton-4oAoiF6k.js";import"./Checkbox-7UO3cE15.js";import"./useValueChanged-C55evCWa.js";import"./CollapsiblePanel-BbO6zUyk.js";import"./MultiColumnSortDialog-dXBnI24o.js";import"./MenuTrigger-IznJiQW7.js";import"./CompositeItem-DeNKjXbZ.js";import"./ToolbarRootContext-CfVJoQTt.js";import"./getDisabledMountTransitionStyles-v2KuCVJ-.js";import"./getPseudoElementBounds-DQxivtBW.js";import"./chevron-down-BMmYWNJW.js";import"./index-CPqJNuLS.js";import"./error-RAN2hlFn.js";import"./BaseCbacBanner-B8gv-HHs.js";import"./makeExternalStore-BfGL_RoB.js";import"./Tooltip-BSG9lXLM.js";import"./PopoverPopup-i_1rED1q.js";import"./toNumber-ByAmdGnI.js";import"./useOsdkClient-Df5LZUPp.js";import"./tick-DyJbbs-Q.js";import"./DropdownField-CQNS3HSI.js";import"./withOsdkMetrics-CLaWF8BQ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
