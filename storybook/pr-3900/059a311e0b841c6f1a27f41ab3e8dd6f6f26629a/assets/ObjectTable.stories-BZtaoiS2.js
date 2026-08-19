import{j as i}from"./iframe-C0JXh_jt.js";import{O as p}from"./object-table-BR4W4gdR.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-NY2CsW-X.js";import"./preload-helper-0Et_7z7-.js";import"./Table-Kbovsawz.js";import"./index-BSrY5iMo.js";import"./Dialog-C4kIKRtm.js";import"./cross-Bm65njCD.js";import"./svgIconContainer-5-WGF7OP.js";import"./useBaseUiId-Bk4impeO.js";import"./InternalBackdrop-C18A-Tx4.js";import"./composite-nAeWCUEc.js";import"./index-Cs47SF-M.js";import"./index-BQYvqJ11.js";import"./index-B1VzYVQh.js";import"./useEventCallback-BvjYX78-.js";import"./SkeletonBar-C39BHLdc.js";import"./LoadingCell-DJwDUOoO.js";import"./ColumnConfigDialog-C4NDWqut.js";import"./DraggableList-GzGJIIDU.js";import"./search-BMjichka.js";import"./Input-DiPNrK96.js";import"./useControlled-DeS56r8l.js";import"./Button-DcuoF34z.js";import"./small-cross-DB3Xtqva.js";import"./ActionButton-C-01Q6PL.js";import"./Checkbox-D9L9g5eC.js";import"./useValueChanged-Dxl2PIC6.js";import"./CollapsiblePanel-CcTUzl4K.js";import"./MultiColumnSortDialog-zrIp6hk-.js";import"./MenuTrigger-CjiYJlVu.js";import"./CompositeItem-CtfPQ2IE.js";import"./ToolbarRootContext-yYdi36hQ.js";import"./getDisabledMountTransitionStyles-BzLHMn7U.js";import"./getPseudoElementBounds-BterO-VS.js";import"./chevron-down-C561UuJZ.js";import"./index-BH6PEMN3.js";import"./error-DWodFhyG.js";import"./BaseCbacBanner-DpG-XC7J.js";import"./makeExternalStore-DmS2WvLR.js";import"./Tooltip-KLREtOGA.js";import"./PopoverPopup-DiEm1yom.js";import"./debounce-2EuMzH9u.js";import"./useOsdkClient-SMhKg19p.js";import"./tick-CaKTO1b8.js";import"./DropdownField-BoK85QnO.js";import"./isEqual-D-q1Gdam.js";import"./withOsdkMetrics-o4Vui-zi.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
