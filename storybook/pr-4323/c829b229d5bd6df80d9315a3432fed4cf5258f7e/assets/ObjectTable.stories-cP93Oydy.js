import{j as i}from"./iframe-DywpB1hE.js";import{O as p}from"./object-table-DSqGDhpz.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C_V2bQsS.js";import"./preload-helper-C9IGOhE9.js";import"./Table-BJyzRyQX.js";import"./index-DmgiNEb3.js";import"./Dialog-b8TWvGfl.js";import"./cross-aTqn6PnT.js";import"./svgIconContainer-BDFx6Zxn.js";import"./useBaseUiId-J99Ack0x.js";import"./InternalBackdrop-ilty_vzC.js";import"./composite-Cr11nkBG.js";import"./index-BtGsUy0O.js";import"./index-BtfNmnmI.js";import"./index-CkWqHjdx.js";import"./useEventCallback-B0JvgrbD.js";import"./SkeletonBar-CYjAwPZM.js";import"./LoadingCell-Dn8kxFfT.js";import"./ColumnConfigDialog-DENzayAM.js";import"./DraggableList-DNGNwkdW.js";import"./search-DVZ7S7-1.js";import"./Input-DaT49KS2.js";import"./useControlled-vk6jUFHs.js";import"./Button-Ctxa2jTP.js";import"./small-cross-DEhP5KVo.js";import"./ActionButton-j4A3JxyA.js";import"./Checkbox-C9Fq3_-7.js";import"./useValueChanged-DBM24efT.js";import"./CollapsiblePanel-QB2yvwOj.js";import"./MultiColumnSortDialog-BV5JkRYB.js";import"./MenuTrigger-B8-0Pn4M.js";import"./CompositeItem-D-O0kvjn.js";import"./ToolbarRootContext-DhYqu86z.js";import"./getDisabledMountTransitionStyles-hoTdldX2.js";import"./getPseudoElementBounds-CTvhJMZP.js";import"./chevron-down-B3UYxdX4.js";import"./index-CiTdpWDW.js";import"./error-zG4ckKPW.js";import"./BaseCbacBanner-030hm0gk.js";import"./makeExternalStore-CFrW1DiS.js";import"./Tooltip-BR9BNp9s.js";import"./PopoverPopup-9xYxalag.js";import"./debounce-DRpUcqeI.js";import"./useOsdkClient-BoCP8Ra0.js";import"./tick-dSuqEogv.js";import"./DropdownField-DhQOHxUk.js";import"./isEqual-CbNKEKf0.js";import"./withOsdkMetrics-BM9yLZRB.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
