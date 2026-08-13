import{j as i}from"./iframe-CKmaUc-O.js";import{O as p}from"./object-table-CRq62ily.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DGfKHGU_.js";import"./preload-helper-CscS6U7X.js";import"./Table-DVRQ-sPW.js";import"./index-CMcZnLz6.js";import"./Dialog-DNkjnae2.js";import"./cross-BALXh9IB.js";import"./svgIconContainer-CegWez8t.js";import"./useBaseUiId-DsDyRBiU.js";import"./InternalBackdrop-SJx0AGfQ.js";import"./composite-C562XDt6.js";import"./index-CIKf3xy6.js";import"./index-BF7pzJIv.js";import"./index-Ka4ymreY.js";import"./useEventCallback-eYCSyrAU.js";import"./SkeletonBar-GS2ZmJl1.js";import"./LoadingCell-B3NoxlTE.js";import"./ColumnConfigDialog-Bgys4H3m.js";import"./DraggableList-CsIjoI6-.js";import"./search-B7xiKcCh.js";import"./Input-XPh25gf6.js";import"./useControlled-DVLJsOQ5.js";import"./Button-DLg7_PpI.js";import"./small-cross-Dl7lp_Ey.js";import"./ActionButton-CydCOtLn.js";import"./Checkbox-DHJNj8N9.js";import"./useValueChanged-Dt88yFTw.js";import"./CollapsiblePanel-DoBfbSRB.js";import"./MultiColumnSortDialog-D4tUSbul.js";import"./MenuTrigger-DWmokvBm.js";import"./CompositeItem-1GI0eeCe.js";import"./ToolbarRootContext-D4A7F4rM.js";import"./getDisabledMountTransitionStyles-6j8GTRV3.js";import"./getPseudoElementBounds-ByMpPU3O.js";import"./chevron-down-B6FJc6l4.js";import"./index-Bn4FIY15.js";import"./error-CuBhF1J1.js";import"./BaseCbacBanner-eO_zya7z.js";import"./makeExternalStore-XgONOm1-.js";import"./Tooltip-ETl6TcVi.js";import"./PopoverPopup-Xkx8d3Rm.js";import"./toNumber-DcvlfLHl.js";import"./useOsdkClient-f9FemdTv.js";import"./tick-CyHVd6Ks.js";import"./DropdownField-1f0jHJ9c.js";import"./withOsdkMetrics-DyRjXdKi.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,le={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ue=["Default"];export{n as Default,ue as __namedExportsOrder,le as default};
