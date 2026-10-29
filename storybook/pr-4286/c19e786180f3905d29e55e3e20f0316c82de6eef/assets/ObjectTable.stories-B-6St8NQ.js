import{j as i}from"./iframe-U_ccsXOa.js";import{O as p}from"./object-table-C6K2P1RQ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BS-bu1CL.js";import"./preload-helper-65xl7bLJ.js";import"./Table-BOJeRv4C.js";import"./index-BOhpqcbq.js";import"./Dialog-CrJCnScq.js";import"./cross-Dx8cyWlu.js";import"./svgIconContainer-Bdip5v4Z.js";import"./useBaseUiId-CsjkwTP2.js";import"./InternalBackdrop-CzMDIOGh.js";import"./composite-jcTrqHdY.js";import"./index-CPxksT-G.js";import"./index-CZOfpX0o.js";import"./index-DZLzj8Gd.js";import"./useEventCallback-C1NlRVeF.js";import"./SkeletonBar-jdk0Bs2q.js";import"./LoadingCell-BnptFSiK.js";import"./ColumnConfigDialog-D9Yv-20N.js";import"./DraggableList-CRzWXSc_.js";import"./search-V9O-Ezy9.js";import"./Input-W79UZ-Qi.js";import"./useControlled-CXjwM6_M.js";import"./Button-6VeiZu2O.js";import"./small-cross-B3RKx4IS.js";import"./ActionButton-CTTQu7QA.js";import"./Checkbox-PiFtXeB5.js";import"./useValueChanged-C_srctpf.js";import"./CollapsiblePanel-DDwW0VQA.js";import"./MultiColumnSortDialog-DjLVYiiu.js";import"./MenuTrigger-BSlHd9Sm.js";import"./CompositeItem-6mTD-F3x.js";import"./ToolbarRootContext-D5-PfmM6.js";import"./getDisabledMountTransitionStyles-BAfvW3aU.js";import"./getPseudoElementBounds-BvimzBGn.js";import"./chevron-down-B2jqRAv_.js";import"./index-BncXt_hB.js";import"./error-DWlA1yK3.js";import"./BaseCbacBanner-CGA1WM7M.js";import"./makeExternalStore-CBJBG8Ns.js";import"./Tooltip-BIBIqrVp.js";import"./PopoverPopup-B1HFntX8.js";import"./debounce-BKzmkk5O.js";import"./useOsdkClient-DMSQnpj7.js";import"./tick-y5pUQKDJ.js";import"./DropdownField-DkE0n-zM.js";import"./isEqual-DuIqjLXy.js";import"./withOsdkMetrics-DkeqZkcw.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
