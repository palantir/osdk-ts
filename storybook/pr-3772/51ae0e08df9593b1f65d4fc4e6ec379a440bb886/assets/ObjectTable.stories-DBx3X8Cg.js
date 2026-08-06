import{j as i}from"./iframe-DQ03zKaw.js";import{O as p}from"./object-table-D0TV_B21.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-kgiNsWui.js";import"./preload-helper-DsOAMWP6.js";import"./Table-kOw5nmNT.js";import"./index-stdVkj-k.js";import"./Dialog-C66CAyKR.js";import"./cross-CJiMy_ZW.js";import"./svgIconContainer--Sopw3_S.js";import"./useBaseUiId-BcwXn3JA.js";import"./InternalBackdrop-BDQCmvGI.js";import"./composite-DzzU_ZlD.js";import"./index-qXGo-ysy.js";import"./index-V5lc2XuU.js";import"./index-DCGK3uWk.js";import"./useEventCallback-BXioPfMh.js";import"./SkeletonBar-BOLkzmdO.js";import"./LoadingCell-BCDUUXR0.js";import"./ColumnConfigDialog-CPqmG5YS.js";import"./DraggableList-B-tT0o9J.js";import"./search-B-4oOix2.js";import"./Input-whmgHMtV.js";import"./useControlled-CbhFopnc.js";import"./isEqual-DZJnDX0x.js";import"./isObject-CgqEtJAk.js";import"./Button-BC8511vo.js";import"./ActionButton-Br0z02Qg.js";import"./Checkbox-BMVyta3Q.js";import"./useValueChanged-Cz9X6_0h.js";import"./CollapsiblePanel--bspc30W.js";import"./MultiColumnSortDialog-CI82RZPT.js";import"./MenuTrigger-CmdoQsfw.js";import"./CompositeItem-B8vFY17A.js";import"./ToolbarRootContext-C2wgqXfe.js";import"./getDisabledMountTransitionStyles-B5rqwZz-.js";import"./getPseudoElementBounds-oUZpb_YO.js";import"./chevron-down-DcVCbfRt.js";import"./index-DFJwtzJK.js";import"./error-Len1bRu3.js";import"./BaseCbacBanner-wd6jVkbW.js";import"./makeExternalStore-Dc9gfDBF.js";import"./Tooltip-BmyXrIl8.js";import"./PopoverPopup-Dnkp6fPn.js";import"./toNumber-BQKjpdMy.js";import"./useOsdkClient-CE2i0WO2.js";import"./tick-xWM0VnDx.js";import"./DropdownField-C9zy3zTJ.js";import"./withOsdkMetrics-DUJdTBYY.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
