import{j as i}from"./iframe-CoFJxwHv.js";import{O as p}from"./object-table-BqrQ0y8E.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DxajDRp0.js";import"./preload-helper-D-SgnzBV.js";import"./Table-BYQbvbey.js";import"./index--Ea47wZq.js";import"./Dialog-WY18wqP5.js";import"./cross-OzyUyhBS.js";import"./svgIconContainer-DEFqmnfP.js";import"./useBaseUiId-2pTyOHN-.js";import"./InternalBackdrop-CW-JCB6u.js";import"./composite-D_cfAskA.js";import"./index-Cisz4sZL.js";import"./index-DB_u2R0T.js";import"./index-Bm20SrpM.js";import"./useEventCallback-S_u0-aCp.js";import"./SkeletonBar-qgco6YeA.js";import"./LoadingCell-CsadYx2G.js";import"./ColumnConfigDialog-Cul_FFgo.js";import"./DraggableList-BW_0kdA5.js";import"./search-XDurstN3.js";import"./Input-DKwzPwJ8.js";import"./useControlled-BYI1O7tr.js";import"./Button-2n8pstyv.js";import"./small-cross-CkY1R3ge.js";import"./ActionButton-NKKyQGHP.js";import"./Checkbox-Dt5HZSzU.js";import"./useValueChanged-Bzeit28k.js";import"./CollapsiblePanel-0TCT3zQ_.js";import"./MultiColumnSortDialog-B8a_YiXG.js";import"./MenuTrigger-CGyqBT_S.js";import"./CompositeItem-Ca1TKgPn.js";import"./ToolbarRootContext-wMltP8Ko.js";import"./getDisabledMountTransitionStyles-5g03uBQa.js";import"./getPseudoElementBounds-C6R4Oz02.js";import"./chevron-down-BlDOgSlD.js";import"./index-DqO9YIyX.js";import"./error-D5A6w5ju.js";import"./BaseCbacBanner-Dxfw8WWQ.js";import"./makeExternalStore-w2_wLIak.js";import"./Tooltip-U-nAk7Io.js";import"./PopoverPopup-B30sWIBx.js";import"./debounce-OWWmpWc0.js";import"./useOsdkClient-u5ILwDJn.js";import"./tick-BeCAXAuB.js";import"./DropdownField-CBHpKdZq.js";import"./isEqual-DVlAt4ne.js";import"./withOsdkMetrics-CWJx0Uh8.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
