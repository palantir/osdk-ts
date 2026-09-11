import{j as i}from"./iframe-FtcUBUVc.js";import{O as p}from"./object-table-Cg5qwIEK.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Ang-AYdO.js";import"./preload-helper-C1DqyS6M.js";import"./Table-BfRaiK3i.js";import"./index-BrOlmJ2Z.js";import"./Dialog-CLH8UVx4.js";import"./cross-CzxFF0QG.js";import"./svgIconContainer-N_OtDM-z.js";import"./useBaseUiId-CE5itc9W.js";import"./InternalBackdrop-CIZ6_1M7.js";import"./composite-7rmuBxl6.js";import"./index-D40iZtqR.js";import"./index-DEH9dzt7.js";import"./index-DoRBg5ik.js";import"./useEventCallback-BBlYjqsb.js";import"./SkeletonBar-U4JWfogU.js";import"./LoadingCell-DeypyuwO.js";import"./ColumnConfigDialog-CMfL490p.js";import"./DraggableList-gcmWlo1u.js";import"./search-dRD30Vx4.js";import"./Input-ByVchIyr.js";import"./useControlled-DyZru4zO.js";import"./Button-GQVi1do4.js";import"./small-cross-BOnfyvVq.js";import"./ActionButton-DEqbbTdP.js";import"./Checkbox-CP36iAuz.js";import"./useValueChanged-B76qlGnm.js";import"./CollapsiblePanel-BYu_oFbL.js";import"./MultiColumnSortDialog-BqzEf6pZ.js";import"./MenuTrigger-Ala7VFV4.js";import"./CompositeItem-CnrRuFeY.js";import"./ToolbarRootContext-C1QQQlr9.js";import"./getDisabledMountTransitionStyles-o44LTai8.js";import"./getPseudoElementBounds-Cn7KCI-8.js";import"./chevron-down-gXp7YXqe.js";import"./index-0OE-AeSh.js";import"./error-DVkQT4u5.js";import"./BaseCbacBanner-DE1-9f-i.js";import"./makeExternalStore-_r-qOFy4.js";import"./Tooltip-B0wu6hL7.js";import"./PopoverPopup-mGK6D3QU.js";import"./debounce-CZPjIx0M.js";import"./useOsdkClient-BzBjGJN-.js";import"./tick-BVYtpY6h.js";import"./DropdownField-BOsCn1Qx.js";import"./isEqual-CWJKbuKS.js";import"./withOsdkMetrics-C6QmSgDy.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
