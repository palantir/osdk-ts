import{j as i}from"./iframe-DlEUhHi7.js";import{O as p}from"./object-table-DzZUmoft.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CXX_8Bzc.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CBMbmU_2.js";import"./index-BdObmdSk.js";import"./Dialog-BRxuTM7c.js";import"./cross-qXDV-79n.js";import"./svgIconContainer-Bju_1rFh.js";import"./useBaseUiId-tb0rTi4h.js";import"./InternalBackdrop-Dj4rbrk1.js";import"./composite-C8IR1RxG.js";import"./index-BZc9O5Mh.js";import"./index-BetcjBuf.js";import"./index-LGLGISh5.js";import"./useEventCallback-qQtofjUs.js";import"./SkeletonBar-DVU3TCkY.js";import"./LoadingCell-D9sJxZss.js";import"./ColumnConfigDialog-BWyNlDY6.js";import"./DraggableList-Dofm2fFK.js";import"./search-DpAuH-Nq.js";import"./Input-LD__uDdD.js";import"./useControlled-DUY1KYlM.js";import"./Button-B-c1jfrq.js";import"./small-cross-CReZphMa.js";import"./ActionButton-DcjyntQn.js";import"./Checkbox-D0qtxLN5.js";import"./useValueChanged-D-FJ2lNx.js";import"./CollapsiblePanel-BGvjwfhf.js";import"./MultiColumnSortDialog-VYovGg0N.js";import"./MenuTrigger-DUnIRnsx.js";import"./CompositeItem-Ds-80rJN.js";import"./ToolbarRootContext-B2EyZNnQ.js";import"./getDisabledMountTransitionStyles-COXtAQgb.js";import"./getPseudoElementBounds-Ca9OCr_g.js";import"./chevron-down-DMneEgPP.js";import"./index-BpuBCpUI.js";import"./error-CpjEBkuC.js";import"./BaseCbacBanner-Cdn9GJ3S.js";import"./makeExternalStore-CQqAo0Kp.js";import"./Tooltip-B7ze2o3f.js";import"./PopoverPopup-CmFEZPXr.js";import"./Select-CRKcgbl8.js";import"./useOsdkClient-RXiRMbJA.js";import"./tick-554cqJa-.js";import"./DropdownField-Et1bzqkY.js";import"./useDebouncedCallback-1RUstQeW.js";import"./isEqual-CK8CnT9X.js";import"./_baseIsEqual-B3kSfXIp.js";import"./stableSerialize-5WUigpEg.js";import"./withOsdkMetrics-CgnK2w0k.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,Te={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const fe=["Default"];export{n as Default,fe as __namedExportsOrder,Te as default};
