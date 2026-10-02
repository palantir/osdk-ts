import{j as i}from"./iframe-hU9JLApV.js";import{O as p}from"./object-table-B50JdQkR.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BsoinM0q.js";import"./preload-helper-AOIAtsF4.js";import"./Table-4tKIzzPo.js";import"./index-hWpPzCns.js";import"./Dialog-U7hbNLwM.js";import"./cross-B2QeVIfm.js";import"./svgIconContainer-C2qhBo7T.js";import"./useBaseUiId-D4EPdJVo.js";import"./InternalBackdrop-DvZB-fzK.js";import"./composite-CG9ZuuKA.js";import"./index-B1eIq1Hb.js";import"./index-DQGyJzH9.js";import"./index-DbLRwfYB.js";import"./useEventCallback-XLlsNp-i.js";import"./SkeletonBar-WjiSPHnz.js";import"./LoadingCell-tB5pg5rq.js";import"./ColumnConfigDialog-Bqk-ioAY.js";import"./DraggableList-DbBUvzj3.js";import"./search-B_1m1rLM.js";import"./Input-BRXbodNm.js";import"./useControlled-Ee3F40Eh.js";import"./Button-DajEVgZJ.js";import"./small-cross-D-LS-vPt.js";import"./ActionButton-0n8OLKNq.js";import"./Checkbox-BnIM9uz-.js";import"./useValueChanged-ChtPqi2-.js";import"./CollapsiblePanel-Bs_-I03G.js";import"./MultiColumnSortDialog-DWhI25AZ.js";import"./MenuTrigger-DXB12-gq.js";import"./CompositeItem-D6B-PBPX.js";import"./ToolbarRootContext-CBnaAJo0.js";import"./getDisabledMountTransitionStyles-WyR546rw.js";import"./getPseudoElementBounds-DToXqBfP.js";import"./chevron-down--KZfqGJl.js";import"./index-DcEtsm11.js";import"./error-C7_JEIae.js";import"./BaseCbacBanner-DzeFUZ4e.js";import"./makeExternalStore-DI5XEFVo.js";import"./Tooltip-CunLwW9k.js";import"./PopoverPopup-DNRoc5pz.js";import"./debounce-DmZrR2IV.js";import"./useOsdkClient-BPIKz5PZ.js";import"./tick-BovZGh7I.js";import"./DropdownField-DSjeR55H.js";import"./isEqual-DXIwE2uQ.js";import"./withOsdkMetrics-D81YUmhb.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
