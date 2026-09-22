import{j as i}from"./iframe-CNVlK6B5.js";import{O as p}from"./object-table-cMgtOXr7.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DMpUtWUU.js";import"./preload-helper-D6U9hvSn.js";import"./Table-BrEIPw8j.js";import"./index-BIcFjsCk.js";import"./Dialog-DQ8SwEYJ.js";import"./cross-Cd5yBkhc.js";import"./svgIconContainer-CkEgUKYH.js";import"./useBaseUiId-oIpQHClg.js";import"./InternalBackdrop-BLlX82gh.js";import"./composite-9AJkVSIl.js";import"./index-CRgut8Os.js";import"./index-CRWNiz7H.js";import"./index-bx27PV2G.js";import"./useEventCallback-BYr5JJCz.js";import"./SkeletonBar-C22W37Hx.js";import"./LoadingCell-BMwD9iUu.js";import"./ColumnConfigDialog-EM-7EP-h.js";import"./DraggableList-BlaJIbqd.js";import"./search-CqRM5I4x.js";import"./Input-BcMyy9hm.js";import"./useControlled-CIn-ajlC.js";import"./Button-BTD6ABzp.js";import"./small-cross-DbE0dAvf.js";import"./ActionButton-CeSKu1lp.js";import"./Checkbox-DfJtmB8Q.js";import"./useValueChanged-COVZ159z.js";import"./CollapsiblePanel-Di-Gvidl.js";import"./MultiColumnSortDialog-D5X3n1eV.js";import"./MenuTrigger-d-w37dUG.js";import"./CompositeItem-DhWvIZCc.js";import"./ToolbarRootContext-B65PxelA.js";import"./getDisabledMountTransitionStyles-BQG1c3sQ.js";import"./getPseudoElementBounds-DOWcaHQH.js";import"./chevron-down-D3H5NEc0.js";import"./index-_ZOs9p_u.js";import"./error-Cf_L3Bxv.js";import"./BaseCbacBanner-LGOURMWm.js";import"./makeExternalStore-AThIzlcn.js";import"./Tooltip-BydjewTb.js";import"./PopoverPopup-B9T3QljB.js";import"./debounce-LvB1QRts.js";import"./useOsdkClient-DSUKa8VK.js";import"./tick-hJyc2tqL.js";import"./DropdownField-JZsjxyDw.js";import"./isEqual-CT1fOhI5.js";import"./withOsdkMetrics-oHno8_nm.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
