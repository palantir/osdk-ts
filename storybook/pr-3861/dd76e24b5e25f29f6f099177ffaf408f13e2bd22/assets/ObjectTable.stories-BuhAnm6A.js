import{j as i}from"./iframe-DXDjAXel.js";import{O as p}from"./object-table-BP82I6MO.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-cLwitpq6.js";import"./preload-helper-IpZxA0ro.js";import"./Table-C6a4keXk.js";import"./index-CpU5tjqP.js";import"./Dialog-Df0gqIAe.js";import"./cross-DEtWv0qy.js";import"./svgIconContainer-jCzC3C8h.js";import"./useBaseUiId-C45Ma1UV.js";import"./InternalBackdrop-CRUN8gyi.js";import"./composite--V8DJrbe.js";import"./index-DeWq_guV.js";import"./index-BxV2gtcY.js";import"./index-BacqsjHg.js";import"./useEventCallback-X2pfGQGy.js";import"./SkeletonBar-HdKrVA_I.js";import"./LoadingCell-CdRFLWJX.js";import"./ColumnConfigDialog-lhgh-FoD.js";import"./DraggableList-DhIqos5Q.js";import"./search-CiGMtB3E.js";import"./Input-Dpc4Iwso.js";import"./useControlled-KXVdK95E.js";import"./Button-B-4Jw48N.js";import"./small-cross-DbxwjyCU.js";import"./ActionButton-DBwaiG9o.js";import"./Checkbox-COH4j_qR.js";import"./useValueChanged-BmkI91ny.js";import"./CollapsiblePanel-BLnECc8-.js";import"./MultiColumnSortDialog-BqJnqOkd.js";import"./MenuTrigger-CWYE3ioj.js";import"./CompositeItem-CDBKBcu9.js";import"./ToolbarRootContext-YFTPY9mo.js";import"./getDisabledMountTransitionStyles-Ccg_pvfR.js";import"./getPseudoElementBounds-BHQeyyd6.js";import"./chevron-down-KI9ROJP6.js";import"./index-BZKWr6fS.js";import"./error-Ba9KLhOx.js";import"./BaseCbacBanner-tj-1o0aL.js";import"./makeExternalStore-Dyu5lTE9.js";import"./Tooltip-_9vbGbii.js";import"./PopoverPopup-Tb6F7J3K.js";import"./debounce-BtAkR6Pi.js";import"./useOsdkClient-_rpTUpw6.js";import"./tick-BygXNrkI.js";import"./DropdownField-DkSwoN9D.js";import"./isEqual-CpA_oqdP.js";import"./withOsdkMetrics-B_T1pq9p.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
